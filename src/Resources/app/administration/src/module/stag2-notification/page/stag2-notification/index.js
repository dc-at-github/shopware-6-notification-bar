import template from "./stag2-notification.html.twig";

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register("stag2-notification", {
    template,

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('listing')
    ],

    inject:[
        'repositoryFactory'
    ],

    data(){
        return {
            isLoading: false,
            stag2Notifications: null,
            total: 0
        }
    },

    computed: {
        notificationRepository(){
            return this.repositoryFactory.create("stag2_notification");
        },

        columns(){
            return [
                {
                    property: "title",
                    index: "title",
                    label: this.$t('stag2.notification.column.title')
                },
                {
                    property: "active",
                    index: "active",
                    label: this.$t('stag2.notification.column.active')
                }
            ];
        }
    },

    created(){
        this.createdComponent();
    },

    methods: {
        createdComponent(){
            this.getStag2Notifications();
        },

        getStag2Notifications(){
            const criteria = new Criteria();

            this.notificationRepository.search(criteria, Shopware.Context.api).then((result) => {
                this.total = result.total;
                this.stag2Notifications = result;
            });
        },

        onChangeLanguage(){
            this.getStag2Notifications();
        }
    }
});