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
                            <div v-if="!activity && !error">
                                <img src="~capsule-editor/src/assets/logo-no-text-1028x1028.png" class="capsule-editor-modal-logo" />
                                <h1 class="font-weight-light mb-4">Document Fixed!</h1>
                                <h5 class="font-weight-light mb-4 mx-5 px-3">Do you want to automatically send it back to us or download it and manually email it as an attachment?</h5>
                                <div class="mb-5">
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
                            <http-exception v-else-if="error" :error="error">
                                <div class="text-center">
                                    <btn size="lg" class="mr-2" @click="onClickSend">
                                        <icon icon="redo" /> Try Again
                                    </btn>
                                    <btn size="lg" variant="secondary" @click="onClickCancel">
                                        <icon icon="times-circle" /> Cancel
                                    </btn>
                                </div>
                            </http-exception>
                        </animate-css>
                    </div>
                </div>
                <div :key="1">
                    <animate-css name="fade" leave-active-class="position-absolute w-100 h-100">
                        <div class="text-center position-relative my-5">
                            <icon icon="check-circle" size="6x" class="text-success" />
                            <h1 class="font-weight-light mt-3 mb-0">Thank You!</h1>
                            <h5 class="font-weight-light my-4 mx-5 px-1">Thank you for your assistance in fixing these errors. We have received your document and will process it shortly.</h5>
                            <btn size="lg" @click="onClickClose">
                                <icon icon="window-close" /> Close Window
                            </btn>
                        </div>
                    </animate-css>
                </div>
                <div :key="2">
                    <div class="text-center position-relative my-5">
                        <icon :icon="['far', 'file-archive']" size="6x" class="text-secondary" />
                        <h1 class="font-weight-light mt-3 mb-0">File Downloaded!</h1>
                        <h4 class="font-weight-light mt-3 mb-1">{{ download.zipname }}</h4>
                        <h5 class="font-weight-light mb-4">({{ download.size }})</h5>
                        <div>
                            <btn class="mr-2" size="lg" variant="success" @click="onClickDownloadAgain">
                                <icon icon="download" /> Download Again
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
import HttpException from './HttpException';
import Btn from 'vue-interface/src/Components/Btn';
import CapsuleEditor from 'capsule-editor/src/Editor';
import { download, revision, zip } from '@/Helpers/Functions';
import SlideDeck from 'vue-interface/src/Components/SlideDeck';
import AnimateCss from 'vue-interface/src/Components/AnimateCss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import { faFileArchive } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faDownload, faCheckCircle, faTimesCircle, faWindowClose, faRedo } from '@fortawesome/free-solid-svg-icons';

library.add(faRedo);
library.add(faEnvelope);
library.add(faDownload);
library.add(faCheckCircle);
library.add(faFileArchive);
library.add(faTimesCircle);
library.add(faWindowClose);

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
        CapsuleEditor,
        HttpException
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
            error: null,
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

        httpRequestOptions() {
            return {
                baseURL: `http://api.thecapsule.${this.environment === 'production' ? 'com' : 'test'}/v1`,
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
                this.error = null;
                this.activity = true;
                this.hourGlassLabel = 'Sending...';

                revision({
                    filename: this.currentFilename,
                    revised_html: this.currentContents,
                    original_html: this.originalContents
                }, this.httpRequestOptions).then(response => {
                    throttled(() => {
                        this.active = 1
                        this.error = null;
                        this.activity = false;
                    });
                }, e => {
                    throttled(() => {
                        this.error = e;
                        this.activity = false;
                    });
                });
            });
        },

        onClickCancel() {
            this.error = null;
            this.active = 0;
        },

        onClickDownloadAgain() {
            download(this.download.blob, this.download.zipname);
        },

        onClickDownload() {
            throttled(() => {
                this.hourGlassLabel = 'Generating...';
                this.activity = true;

                zip(this.currentContents, this.currentFilename)
                    .then(blob => {
                        this.download.blob = blob;
                        this.download.filename = this.currentFilename;
                        this.download.size = this.formatBytes(blob.size);
                        this.download.zipname = this.currentFilename.replace(/\.html/, '.zip');

                        throttled(() => {
                            this.active = 2;

                            setTimeout(() => {
                                download(blob, this.download.zipname);
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
    min-width: 20rem;

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
