<template>
  <div class="error-report">
    <template v-if="!currentErrors">
      <activity-indicator
        type="spinner"
        label="Checking for errors..."
        center
      />
    </template>
    <template v-else-if="currentErrors.length">
      <div
        v-if="!editMode"
        class="error-report-list"
      >
        <div class="jumbo-icon jumbo-icon-danger">
          <icon icon="bug" />
        </div>
        <h1 class="display-5 text-center mb-4">
          Ooops, we found some errors...
        </h1>
        <card class="mb-4">
          <card-body>
            <h4>Important</h4>
            <p class="error-report-text">
              The following errors need fixed before the document is considered valid.
            </p>
            <ul class="error-report-errors">
              <li v-for="error in currentErrors">
                <a
                  href="#"
                  @click="showError(error)"
                  v-html="format(error)"
                />
              </li>
            </ul>
          </card-body>
        </card>
        <btn
          size="lg"
          variant="danger"
          block
          @click.prevent="editMode = true"
        >
          <icon icon="tools" /> Fix Errors
        </btn>
      </div>
      <div v-else>
        <code-editor
          v-model="editor"
          :page-controls="false"
          :errors="currentErrors"
          :contents="currentContents"
          :filename="currentFilename"
          :lint="lintOptions"
          @lint-errors="onLintError"
          @lint-success="onLintSuccess"
          @close="editMode = false"
        />
      </div>
    </template>
    <template v-else-if="!revision">
      <div class="error-report-fixed">
        <div class="jumbo-icon">
          <icon icon="clipboard-check" />
        </div>
        <h1 class="display-5 text-center mb-4">
          Your document is valid!
        </h1>
        <card class="mb-4">
          <card-body>
            <h4>Important</h4>
            <p>
              The errors in the document have been fixed but you still need to send it back to ActiveEngagement for processing.
            </p>

            <ol class="mb-0 pl-3">
              <li class="mb-3">
                You can automatically send it back directly back to us for processing.
              </li>
              <li>
                Or download it and manually send it as an email attachment.
              </li>
            </ol>
          </card-body>
        </card>

        <btn-activity
          :activity="activity"
          size="lg"
          variant="success"
          block
          @click.prevent="onClickSend"
        >
          <icon icon="mail-bulk" /> Automatically Send File
        </btn-activity>

        <btn
          size="lg"
          variant="secondary"
          block
          outline
          @click.prevent="onClickDownload"
        >
          <icon icon="download" /> Manually Download File
        </btn>
      </div>
    </template>
    <template v-else>
      <div class="error-report-revision">
        <div class="jumbo-icon">
          <icon icon="envelope" />
        </div>
        <h1 class="display-5 text-center mb-4">
          Revision Sent!
        </h1>
        <p class="error-report-text">
          Your revision has been successfully sent!
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'crypto-js/md5';
import { download } from '@/Helpers/Functions';
import Btn from 'vue-interface/src/Components/Btn';
import Card from 'vue-interface/src/Components/Card';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
import CardBody from 'vue-interface/src/Components/Card/CardBody';
import BtnActivity from 'vue-interface/src/Components/BtnActivity';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons/faClipboardCheck';

library.add(faBug);
library.add(faTools);
library.add(faEnvelope);
library.add(faDownload);
library.add(faMailBulk);
library.add(faClipboardCheck);


export default {

    name: 'ErrorReport',

    components: {
        Btn,
        Card,
        Icon,
        CardBody,
        BtnActivity,
        ActivityIndicator,
        CodeEditor: () => import('vue-code-editor/src/Editor')
    },

    props: {

        apiKey: {
            type: String,
            required: true
        },

        baseUrl: {
            type: String,
            default: `http://capsule.actengage.${process.env.NODE_ENV === 'development' ? 'test' : 'com'}/api/v1`
        },

        contents: String,

        filename: String,

        errors: Array

    },

    data() {
        return {
            editor: null,
            editMode: false,
            revision: null,
            activity: false,
            originalErrors: this.errors,
            currentErrors: this.errors,
            originalFilename: this.filename,
            currentFilename: this.filename,
            originalContents: this.contents || this.getSlotContents(),
            currentContents: this.contents || this.getSlotContents()
        }
    },

    computed: {

        lintOptions() {
            return {
                baseURL: this.baseUrl,
                headers: {
                    Authorization: `Bearer ${this.apiKey}`
                }
            }
        }

    },

    watch: {

        editor(value) {
            this.currentFilename = value.filename;
            this.currentContents = value.contents;
        }

    },

    mounted() {
        if(!this.currentErrors) {
            this.lint();
        }

        window.addEventListener('keydown', this.onKeydown);
    },

    beforeDestroy() {
        window.removeEventListener('keydown', this.onKeydown);
    },

    methods: {

        onClickSend() {
            this.activity = true;

            this.createRevision().then(revision => {
                this.revision = revision;
            }).then(() => {
                this.activity = false
            });
        },

        onClickDownload() {
            download(this.currentContents, this.currentFilename);
        },

        onKeydown(e) {
            if(e.keyCode === 27) {
                this.editMode = false;
            }
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
                    key: md5(this.currentFilename).toString(),
                    filename: this.filename,
                    revised_html: this.currentContents,
                    original_html: this.originalContents
                }, this.lintOptions).then(response => {
                    resolve(response.data);
                }, e => {
                    reject(e.response ? (e.response.data.errors || e.response.data) : e);
                });
            });
        },

        lint() {
            return new Promise((resolve, reject) => {
                axios.post('lint', {
                    html: this.currentContents
                }, this.lintOptions).then(response => {
                    this.currentErrors = [];
                }, e => {
                    this.currentErrors = e.response.data.errors;
                });
            });
        },

        getSlotContents() {
            return this.$slots.default ? this.$slots.default.filter(vnode => {
                return vnode.tag.toLowerCase() === 'textarea';
            }).reduce((carry, vnode) => {
                return carry + vnode.children.map(child => {
                    return child.text;
                }).join('');
            }, '') : null;
        },

        format(error) {
            return `Line ${error.line},${error.column} :: ${error.code} ${error.msg} (${error.rule})`;
        }

    }

}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

$jumbo-icon-bg: $success;
$jumbo-icon-color: white;
$jumbo-icon-width: 7.5rem;

html {
    display: flex;
    width: 100%;
    height: 100%;
}

body {
    flex: 1;

    & > div {
        display: flex;
        width: 100%;
        height: 100%;
    }
}

.error-report {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    .jumbo-icon {
        margin: 0 auto;
        background: $jumbo-icon-bg;
        border-radius: 100%;
        color: $jumbo-icon-color;
        width: $jumbo-icon-width;
        height: $jumbo-icon-width;
        line-height: $jumbo-icon-width;
        font-size: $jumbo-icon-width / 2;
        display: flex;
        justify-content: center;
        align-items: center;

        &.jumbo-icon-danger {
            background: $danger;
        }
    }

    .jumbo-icon + h1 {
        margin-top: 2rem;
    }

    .display-5 {
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 1.2;
    }

    .error-report-text {
        font-size: 20px;
    }

    .error-report-errors {
        font-size: 18px;
        margin-bottom: 0;
        padding-left: 1em;
    }

    .error-report-list,
    .error-report-fixed {
        max-width: 525px;
        margin-bottom: 4rem;
    }

    .error-report-fixed {

    }
}
</style>
