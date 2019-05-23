<template>

    <div class="http-exception" :class="{ fixed }">
        <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <div class="http-exception-content my-5">
                <div class="text-center mx-5 mb-3 p-4">
                    <icon icon="bomb" size="6x"/>
                </div>
                <h1 class="font-weight-light mb-4">Something went wrong....</h1>
                <alert>
                    <h4 class="font-weight-light m-3">{{ error }}</h4>

                    <ul class="mt-3">
                        <template v-for="errors in error.response.data.errors">
                            <li v-for="(error, i) in errors" :key="i"><h5>{{ error }}</h5></li>
                        </template>
                    </ul>
                </alert>
                <slot />
            </div>
        </div>
    </div>

</template>

<script>
import Alert from 'vue-interface/src/Components/Alert';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';

library.add(faBomb);

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
    
    name: 'HttpException',

    components: {
        Icon,
        Alert
    },

    props: {
        error: Error,
        fixed: Boolean
    }

};
</script>

<style lang="scss">
.http-exception {

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .http-exception-content {
        max-width: 32rem;
    }
}
</style>
