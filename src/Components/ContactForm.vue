<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <form class="contact-form" @submit.prevent="onSubmit">
                <slide-deck :active="active">
                    <div :key="0">
                        <div class="text-center text-primary mt-4 mb-4">
                            <icon :icon="['far', 'life-ring']" size="5x" />
                        </div>

                        <div class="px-1">
                            <p>Enter your contact information and a brief message and we will back with you as soon as possible. Your name and an email or phone number is required.</p>

                            <input-field v-model="form.name" size="md" label="Name" placeholder="Name" :errors="errors" custom />
                            <input-field v-model="form.email" size="md" label="Email" placeholder="Email" :errors="errors" custom />
                            <input-field v-model="form.phone" size="md" label="Phone" placeholder="Phone" :errors="errors" custom />
                        </div>

                        <animate-css name="fade">
                            <notepad v-if="showNotepad" v-model="notepad" editable :header="false" :footer="false" class="mb-3">
                                <template #default>
                                    Hi, I am interested in using Capsule. [INSERT YOUR MESSAGE HERE]
                                </template>
                            </notepad>
                        </animate-css>
                        
                        <btn-activity size="lg" :activity="activity" :disabled="!form.name || !form.message || !(form.email || form.phone)" block>
                            Send Message
                        </btn-activity>
                        
                        <div class="text-center mt-2">
                            <small><router-link :to="{name: 'home'}"><icon icon="long-arrow-alt-left" /> Back to Report</router-link></small>
                        </div>
                    </div>
                    <div :key="1">
                        <card>
                            <card-body>
                                <div class="text-center text-primary mt-4 mb-4">
                                    <icon :icon="['far', 'check-circle']" size="5x" />
                                </div>

                                <h1 class="text-center font-weight-light mb-4">
                                    Thank You!
                                </h1>

                                <p class="mx-4">
                                    Thank you for contacting us. We have received your message. We will get back to you as soon as possible.
                                </p>
                            </card-body>
                        </card>
                        <div class="text-center mt-2">
                            <small><router-link :to="{name: 'home'}"><icon icon="long-arrow-alt-left" /> Back to Report</router-link></small>
                        </div>
                    </div>
                    <div :key="2">
                        <http-exception :error="error" />
                    </div>
                </slide-deck>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Notepad from 'vue-notepad';
import HttpException from './HttpException';
import Card from 'vue-interface/src/Components/Card';
import SlideDeck from 'vue-interface/src/Components/SlideDeck';
import AnimateCss from 'vue-interface/src/Components/AnimateCss';
import InputField from 'vue-interface/src/Components/InputField';
import CardBody from 'vue-interface/src/Components/Card/CardBody';
import BtnActivity from 'vue-interface/src/Components/BtnActivity';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import { faLifeRing, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faComment, faExclamationTriangle, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faComment);
library.add(faLifeRing);
library.add(faCheckCircle);
library.add(faLongArrowAltLeft);
library.add(faExclamationTriangle);

export default {

    components: {
        Icon,
        Card,
        CardBody,
        Notepad,
        SlideDeck,
        AnimateCss,
        InputField,
        BtnActivity,
        HttpException
    },

    data() {
        return {
            active: 0,
            error: null,
            errors: null,
            activity: false,
            showNotepad: false,
            notepad: {},
            form: {
                name: null,
                email: null,
                phone: null,
                message: null
            }
        };
    },

    watch: {

        active() {
            this.activity = false;
        },

        notepad: {
            deep: true,
            handler(avlue) {
                this.form.message = this.notepad.body;
            }
        },

        form: {
            deep: true,
            handler(avlue) {
                if(this.form.name && (this.form.email || this.form.phone)) {
                    this.showNotepad = true;
                }
            }
        }

    },

    methods: {
        
        onSubmit(event) {
            const baseURL = process.env.NODE_ENV === 'development' ?
                'http://api.thecapsule.test/v1' :
                'https://api.thecapsule.email/v1';

            this.activity = true;
            
            axios
                .post('support/contact', this.form, {
                    baseURL,
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(response => {
                    this.active = 1;
                }, e => {
                    this.error = e;
                    this.active = 2;
                });

        }

    }

};
</script>

<style lang="scss">
@import '~vue-interface/src/scss/custom-fields';

.contact-form {
    font-size: 1.25em;
}
</style>
