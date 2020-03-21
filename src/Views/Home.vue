<template>
    <div class="container">
        <div class="bug-report mt-5">
            <header class="bug-report-logo">
                <animate-css name="zoom" left enter="zoomInLeft" leave="zoomOutRight">    
                    <img v-if="mounted" src="~capsule-editor/src/assets/logo-no-text-1028x1028.png" class="img-fluid bug-report-logo-mark">
                </animate-css>
                <animate-css name="fade" delay=".5s">
                    <img v-if="mounted" src="../assets/capsule-logo-text.svg" class="img-fluid bug-report-logo-text">
                </animate-css>
            </header>

            <router-view v-if="mounted" :api-key="apiKey" :lint="lint" :team="team" />
        </div>
    </div>
</template>

<script>
import AnimateCss from 'vue-interface/src/Components/AnimateCss';

export default {
    
    name: 'Home',

    components: {
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
            type: [Number, Object],
            required: true
        }
        
    },
    
    data() {
        return {
            mounted: false
        };
    },

    mounted() {
        this.mounted = true;
    }
    
};
</script>
