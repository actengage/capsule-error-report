<template>

    <capsule-editor
        ref="editor"
        demo-mode
        v-model="editor"
        :errors="lint.errors"
        :filename="lint.filename"
        :api-key="apiKey"
        :contents="lint.html"
        :environment="environment"
        @lint-errors="onLintError"
        @lint-success="onLintSuccess"
        @close="$router.push({name: 'home'})">

        <template #success>
            <slide-deck :active="active">
                <div :key="0">
                    <div class="text-center position-relative">
                        <animate-css name="fade" up leave-active-class="position-absolute w-100 h-100">
                            <div v-if="!activity">
                                <img src="~capsule-editor/src/assets/logo-no-text-1028x1028.png" class="capsule-editor-modal-logo" />
                                <h1 class="font-weight-light">Success!</h1>
                                <h5 class="font-weight-light mb-3 mx-5 px-3">Your document has been fixed. You can choose to send the file back automatically or download it and manually email it as an attachment.</h5>
                                <div class="mb-3">
                                    <btn size="lg" variant="success" class="mr-2" @click="onClickSend"><icon icon="envelope" /> Send Now</btn>
                                    <btn size="lg" variant="success" outline @click="onClickDownload"><icon icon="download" /> Download</btn>
                                </div>
                            </div>
                        </animate-css>
                        <animate-css name="fade" up leave-active-class="position-absolute w-100 h-100">
                            <div v-if="activity" class="my-5 py-5">
                                <div class="my-5">
                                    <hourglass :label="hourGlassLabel" animate />
                                </div>
                            </div>
                        </animate-css>
                    </div>
                </div>
                <div :key="1">
                    <animate-css name="fade" leave-active-class="position-absolute w-100 h-100">
                        <div class="text-center position-relative my-5">
                            <icon icon="check-circle" size="6x" />
                            <h1 class="font-weight-light mt-3 mb-0">Revision Sent!</h1>
                            <h5 class="font-weight-light my-4 mx-5 px-3">We have received your document and will be processed shortly. Thank you for fixing the document!</h5>
                            <btn size="lg" @click="onClickClose">
                                <icon icon="window-close" /> Close Window
                            </btn>
                        </div>
                    </animate-css>
                </div>
                <div :key="2">
                    <div class="text-center position-relative my-5">
                        <icon :icon="['far', 'file-archive']" size="6x" />
                        <h1 class="font-weight-light mt-3 mb-0">File Downloaded!</h1>
                        <h4 class="font-weight-light mt-3 mb-1">{{ download.filename }}</h4>
                        <h5 class="font-weight-light mb-4">({{ download.size }})</h5>
                        <div>
                            <btn class="mr-2" size="lg" variant="success" @click="onClickDownloadAgain">
                                <icon icon="download" /> Download File
                            </btn>
                            <btn size="lg" @click="onClickClose">
                                <icon icon="window-close" /> Close Window
                            </btn>
                        </div>
                    </div>
                </div>
            </slide-deck>
        </template>
        
    </capsule-editor>
       
</template>

<script>
import { throttle } from 'lodash';
import Hourglass from 'vue-hourglass';
import Btn from 'vue-interface/src/Components/Btn';
import CapsuleEditor from 'capsule-editor/src/Editor';
import { download, revision, zip } from '@/Helpers/Functions';
import SlideDeck from 'vue-interface/src/Components/SlideDeck';
import AnimateCss from 'vue-interface/src/Components/AnimateCss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import { faFileArchive } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faDownload, faCheckCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);
library.add(faDownload);
library.add(faCheckCircle);
library.add(faWindowClose);
library.add(faFileArchive);

const throttled = throttle(fn => {
    fn && fn();
}, 2500);

export default {
    
    name: 'Editor',

    components: {
        Btn,
        Icon,
        Hourglass,
        SlideDeck,
        AnimateCss,
        CapsuleEditor
    },

    props: {
        
        lint: {
            type: Object,
            required: true
        },

        errors: Array,

        apiKey: {
            type: String,
            required: true
        },

        environment: {
            type: String,
            default() {
                return process.env.NODE_ENV;
            }
        }
    },

    data() {
        const errors = this.errors || [];

        return {
            active: 0,
            editor: null,
            revision: null,
            activity: false,
            download: {
                blob: null,
                size: null,
                zipname: null,
                filename: null,
            },
            hourGlassLabel: null,
            originalErrors: this.errors,
            currentErrors: errors.slice(0),
            currentFilename: this.lint.filename,
            originalFilename: this.lint.filename,
            currentContents: this.lint.html || this.getSlotContents(),
            originalContents: this.lint.html || this.getSlotContents()
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


        editor({ filename, contents }) {
            this.currentFilename = filename;
            this.currentContents = contents;
        }
    },

    methods: {

        formatBytes(bytes) {
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },

        onClickSend() {
            throttled(() => {
                this.hourGlassLabel = 'Sending...';
                this.activity = true;
            });

            revision({
                filename: this.currentFilename,
                revised_html: this.currentContents,
                original_html: this.originalContents
            }).then(response => {
                console.log(response);
            }, e => {
                console.log(e);
            }).finally(() => {
                throttled(() => this.active = 1);
            });
        },

        onClickDownloadAgain() {
            download(this.download.blob, this.download.filename);
        },

        onClickDownload() {
            throttled(() => {
                this.hourGlassLabel = 'Generating...';
                this.activity = true;

                zip(this.currentContents, this.currentFilename)
                    .then(blob => {
                        this.download.blob = blob;
                        this.download.size = this.formatBytes(blob.size);
                        this.download.filename = this.currentFilename.replace(/\.html/, '');
                        this.download.zipname = this.currentFilename.replace(/\.html/, '.zip');

                        throttled(() => {
                            this.active = 2;

                            setTimeout(() => {
                                download(blob, this.download.filename);
                            }, 250);
                        });
                    });
            });
        },

        onClickClose() {
            window.close();
        },

        onLintError(e, errors) {
            this.currentErrors = errors;
        },

        onLintSuccess(e) {
            this.currentErrors = [];
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

    },

    mounted() {
        this.$nextTick(() => {
            const { line, ch, code } = this.$route.query;

            this.$refs.editor.$refs.field.cm.state.lint.errors.forEach(error => {
                if(error.code === code && error.line === line && error.ch === ch) {
                    error.focus();
                }
            });
        });
    }

};
</script>

<style lang="scss">
.capsule-editor-modal {
    .slide-deck-content {
        overflow: hidden;
    }

    .hourglass-label {
        font-size: 1.4em;
    }
    .hourglass-icon {
        font-size: 3em;
    }
}
</style>
