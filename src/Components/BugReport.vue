<template>

    <div class="container">

        <div class="bug-report mt-5">

            <animate-css name="fade" delay=".6666s">
                <notepad v-if="mounted" class="mt-5">
                    <template #header>
                        <div class="d-flex justify-content-center">
                            <div class="text-center">
                                <img src="../assets/capsule-bug-report.png" class="img-fluid img-header" />
                            </div>
                        </div>
                    </template>
                    
                    <br>
                    <h5>{{ lint.created_at | date('MM/DD/YYYY hh:mm A') }}</h5>
                    <br>
                    <p>We found some errors in <strong>document.html</strong>. The following errors need to be fixed before we can send your email:</p>
                    <br>
                    <ol>
                        <li v-for="(error, i) in lint.errors" :key="i">
                            <router-link :to="{name: 'fix', query: { line: error.line - 1, ch: error.column - 1, code: error.code }}" v-html="format(error)" />
                        </li>
                    </ol>
                    <br>
                    <h5 class="font-weight-bold">Additional Resources</h5>
                    <ol>
                        <li><a href="http://thecapsule.email/docs/error-codes">Error Code Glossary</a></li>
                        <li><router-link :to="{name: 'contact'}">Contact Support</router-link></li>
                    </ol>
                </notepad>
            </animate-css>

            <animate-css name="fade" delay=".85s">
                <div v-if="mounted" class="m-4 text-center">
                    <btn :to="{name: 'fix'}" size="xl"><icon icon="tools" /> Fix Errors</btn>
                </div>
            </animate-css>
            
        </div>

    </div>

</template>

<script>
import axios from 'axios';
import Notepad from 'vue-notepad';
import { download } from '@/Helpers/Functions';
import Btn from 'vue-interface/src/Components/Btn';
import AnimateCss from 'vue-interface/src/Components/AnimateCss';
import { DateFilter as date } from 'vue-interface/src/Filters/Date';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';

library.add(faTools);

/*
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons/faClipboardCheck';

library.add(faEnvelope);
library.add(faDownload);
library.add(faMailBulk);
library.add(faClipboardCheck);
*/

export default {
    
    name: 'BugReport',

    components: {
        Btn,
        Icon,
        Notepad,
        AnimateCss
    },

    props: {

        apiKey: {
            type: String,
            required: true
        },

        lint: {
            type: Object,
            required: true
        },

        team: {
            type: Object,
            required: true
        }
        
    },

    filters: {
        date
    },

    data() {
        return {
            mounted: false
        };
    },

    methods: {

        format(error) {
            return `Line ${error.line},${error.column} :: ${error.code} ${error.msg} (${error.rule})`;
        }

    },

    mounted() {
        this.mounted = true;
    }
    
};
</script>

<style lang="scss">
.bug-report {
    // display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    .btn-xl {
        padding: .75rem 2rem;
        font-size: 1.5rem;
    }

    .bug-report-logo {
        display: flex;
        flex-direction: column;
        
        .bug-report-logo-text {
            height: 3rem;
            margin-top: 2rem;
            animation-delay: 1000ms;
        }

        .bug-report-logo-mark {
            width: 8rem;
            margin: 0 auto;
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

    .bug-report-text {
        font-size: 20px;
    }

    .bug-report-errors {
        font-size: 18px;
        margin-bottom: 0;
        padding-left: 1em;
    }

    .bug-report-list,
    .bug-report-fixed {
        max-width: 525px;
        margin-bottom: 4rem;
    }

    .notepad {
        margin: 0 auto;
        max-width: 50rem;

        .img-header {
            max-height: 8rem;
        }
    }
}
</style>
