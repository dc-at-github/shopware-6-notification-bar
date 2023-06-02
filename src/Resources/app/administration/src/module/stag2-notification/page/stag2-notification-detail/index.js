import template from "./stag2-notification-detail.html.twig";
import './stag2-notification-detail.scss';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register("stag2-notification-detail", {
    template,

    inject:[
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName("notification")
    ],

    data(){
        return {
            stag2Notification: null,
            isLoading: false,
            processSuccess: false,
            langEnabled: true,
            isPopup: false,
            itemId: "",
        };
    },

    computed:{
        stag2NotificationRepository(){
            return this.repositoryFactory.create("stag2_notification");
        },
        getDisplayAsOptions() {
            return [{
                value: "bar",
                label: "Bar"
            }, {
                value: "popup",
                label: "Popup"
            }];
        },
        getAnimationOptions(){
            return [{
                value: "fade-in",
                label: "Fade In"
            }, {
                value: "slide-up",
                label: "Slide Up"
            }, {
                value: "slide-down",
                label: "Slide Down"
            }, {
                value: "slide-left",
                label: "Slide Left"
            }, {
                value: "slide-right",
                label: "Slide Right"
            }];
        },
        getBorderTypeOptions(){
            return [{
                value: "no-border",
                label: "No Border"
            }, {
                value: "solid",
                label: "Solid"
            }, {
                value: "dashed",
                label: "dashed"
            }];
        },
        getPositionOptions(){
            return [{
                value: "top",
                label: "Top"
            }, {
                value: "bottom",
                label: "Bottom"
            }, {
                value: "below-header",
                label: "Below Header"
            }, {
                value: "above-footer",
                label: "Above Footer"
            }]
        },
        getBarWidthOptions(){
            return [{
                value: "box-content",
                label: "Box Content"
            }, {
                value: "full-width",
                label: "Full Width"
            }];
        }
    },

    created(){
        this.createdComponent();
    },
    watch: {
        'stag2Notification.displayAs'(value){
            this.isPopup = (value == "popup");
        }
    },
    methods: {
        createdComponent(){
            this.getStagNotification();

            if(this.stag2Notification && this.stag2Notification.isNew() &&
                Shopware.Context.api.languageId !== Shopware.Context.api.systemLanguageId){
                Shopware.State.commit('context/setApiLanguageId', Shopware.Context.api.systemLanguageId);
            }
        },
        async getStagNotification(){
            this.isLoading = true;

            await this.stag2NotificationRepository
                .get(this.$route.params.id, Shopware.Context.api)
                .then((result) => {
                    this.stag2Notification = result;
                    this.isLoading = false;
                });
        },

        onSave(){
            this.isLoading = true;

            this.stag2NotificationRepository
                .save(this.stag2Notification, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.processSuccess = true;
                    this.createNotificationSuccess({
                        title: "Succeess!",
                        message: "Notification Saved successfully."
                    });
                })
                .catch((exception) => {
                    this.isLoading = false;

                    if (exception.response.data && exception.response.data.errors) {
                        exception.response.data.errors.forEach((error) => {
                            this.createNotificationWarning({
                                title: "Error!",
                                message: error.detail,
                                duration: 10000
                            });
                        });
                    }
                });
        },

        saveFinish(){
            this.processSuccess = false;
        },

        onChangeLanguage(){
            this.getStagNotification();
        }

    }
});