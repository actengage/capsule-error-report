<template>

    <router-view v-if="lint" :lint="lint" :api-key="apiKey" />

    <activity-indicator
        v-else-if="!error"
        label="Checking for errors..."
        type="spinner"
        center
    />

    <http-exception v-else :error="error" />
    
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import router from './router';
import bugsnag from '@bugsnag/js';
import bugsnagVue from '@bugsnag/plugin-vue';
import { lint } from './Helpers/Functions';
import HttpException from './Components/HttpException';
import ActivityIndicator from 'vue-interface/src/Components/ActivityIndicator';

// bugsnag(process.env.VUE_APP_BUGSNAG).use(bugsnagVue, Vue);

export default {

    router,

    components: {
        HttpException,
        ActivityIndicator
    },

    props: {

        model: Object,

        filename: String,

        apiKey: {
            type: String,
            required: true
        },

        environment: {
            type: String,
            validate(value) {
                return ['production', 'development'].indexOf(value) !== -1;
            }
        }

    },

    computed: {

        html() {
            return this.getSlotContents();
        }

    },

    methods: {

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
        }

    },

    created() {
        this.$router.push({name: 'home'});
    },

    mounted() {
        if(!this.lint) {
            lint({
                html: this.html,
                filename: this.filename
            }, {
                baseURL: `http://api.thecapsule.${this.environment === 'production' ? 'com' : 'test'}/v1`,
                headers: {
                    Authorization: `Bearer ${this.apiKey}`
                }
            }).then(response => {
                this.lint = response.data;
            }, e => {
                if(e.response.status === 406) {
                    this.lint = e.response.data;
                }
                else {
                    this.error = e;
                }
            });
        }
    },

    data() {
        return {
            error: null,
            lint: this.model
        };
    }
    
}
</script>
<style lang="scss">
$blue: #2C5C97;
$yellow: #F6D878;
$green: darken(#6CB996, 20%);

$display5-weight: 300 !default;
$display5-size: 2.85rem !default;

@import "~bootstrap/scss/bootstrap";
</style>
