<template>

    <router-view v-if="lint" :lint="lint" :api-key="apiKey" :team="team" />

    <div v-else-if="!error" class="position-absolute d-flex justify-content-center align-items-center h-100 w-100">
        <hourglass label="Checking for errors..." animate size="2x" />
    </div>
    
    <http-exception v-else :error="error" />
    
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import router from './router';
import bugsnag from '@bugsnag/js';
import Hourglass from 'vue-hourglass';
import { lint } from './Helpers/Functions';
import bugsnagVue from '@bugsnag/plugin-vue';
import HttpException from './Components/HttpException'

bugsnag({
    apiKey: process.env.VUE_APP_BUGSNAG,
    notifyReleaseStages: ['production', 'staging']
}).use(bugsnagVue, Vue);

export default {

    router,

    components: {
        Hourglass,
        HttpException
    },

    props: {

        model: Object,

        filename: String,

        apiKey: {
            type: String,
            required: true
        },

        team: {
            type: Object,
            required: true,
            validate({ id }) {
                return !!id;
            }
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
                filename: this.filename,
                team_id: typeof this.team === 'object' ? this.team.id : this.team
            }, {
                baseURL: `http://api.thecapsule.${this.environment === 'production' ? 'email' : 'test'}/v1`,
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

.hourglass .hourglass-label {
    font-size: 1.5em;
    margin-top: 1em;
}
</style>
