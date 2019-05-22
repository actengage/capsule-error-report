<template>

    <capsule-editor
        demo-mode
        v-model="editor"
        :errors="lint.errors"
        :filename="lint.filename"
        :lint="lintOptions"
        :contents="lint.html"
        @lint-errors="onLintError"
        @lint-success="onLintSuccess"
        @close="$router.push({name: 'home'})">
        
    </capsule-editor>
       
</template>

<script>
import CapsuleEditor from 'capsule-editor/src/Editor';

export default {
    
    name: 'Editor',

    components: {
        CapsuleEditor
    },

    props: {
        
        lint: {
            type: Object,
            required: true
        },

        contents: String,

        errors: Array,

        exception: String,

        filename: String,

        apiKey: {
            type: String,
            required: true
        },

        environment: {
            type: String,
            default: 'production'
        }
    },

    data() {
        const errors = this.errors || [];

        return {
            editor: null,
            revision: null,
            activity: false,
            originalErrors: this.errors,
            currentErrors: errors.slice(0),
            originalFilename: this.filename,
            currentFilename: this.filename,
            originalContents: this.contents || this.getSlotContents(),
            currentContents: this.contents || this.getSlotContents()
        };
    },

    computed: {
        lintOptions() {
            return {
                baseURL: `http://thecapsule.${this.environment === 'production' ? 'com' : 'test'}/api/v1`,
                headers: {
                    Authorization: `Bearer ${this.apiKey}`
                }
            };
        }
    },

    watch: {
        editor(value) {
            this.currentFilename = value.filename;
            this.currentContents = value.contents;
        }
    },

    methods: {

        onClickSend() {
            this.activity = true;

            this.createRevision()
                .then(revision => {
                    this.revision = revision;
                })
                .then(() => {
                    this.activity = false;
                });
        },

        onClickDownload() {
            download(this.currentContents, this.currentFilename);
        },

        onLintError(e, errors) {
            this.currentErrors = errors;
        },

        onLintSuccess(e) {
            this.currentErrors = [];
        },

        createRevision() {
            return new Promise((resolve, reject) => {
                axios.post('revisions', {
                    errors: this.originalErrors.map(error => {
                        error = Object.assign({}, error);
                        
                        delete error.open;

                        return error;
                    }),
                    filename: this.filename,
                    revised_html: this.currentContents,
                    original_html: this.originalContents,
                    key: md5(this.currentFilename).toString(),
                }, this.lintOptions)
                .then(response => {
                    resolve(response.data);
                }, e => {
                    reject(e.response ? e.response.data.errors || e.response.data : e);
                });
            });
        },

        getSlotContents() {
            return this.$slots.default ? 
                this.$slots.default
                    .filter(vnode => {
                        return vnode.tag.toLowerCase() === 'textarea';
                    })
                    .reduce((carry, vnode) => {
                        return (
                            carry + vnode.children.map(child => {
                                return child.text;
                            }).join('')
                        );
                    }, '') : null;
        },

        format(error) {
            return `Line ${error.line},${error.column} :: ${error.code} ${
                error.msg
            } (${error.rule})`;
        }

    }
};
</script>