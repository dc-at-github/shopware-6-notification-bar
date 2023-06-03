import template from "./dc-notification.html.twig";

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register("dc-notification", {
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
            dcNotifications: null,
            total: 0
        }
    },

    computed: {
        notificationRepository(){
            return this.repositoryFactory.create("dc_notification");
        },

        columns(){
            return [
                {
                    property: "title",
                    index: "title",
                    label: this.$t('dc.notification.column.title')
                },
                {
                    property: "active",
                    index: "active",
                    label: this.$t('dc.notification.column.active')
                }
            ];
        }
    },

    created(){
        this.createdComponent();
    },

    methods: {
        createdComponent(){
            this.getDcNotifications();
        },

        getDcNotifications(){
            const criteria = new Criteria();

            this.notificationRepository.search(criteria, Shopware.Context.api).then((result) => {
                this.total = result.total;
                this.dcNotifications = result;
            });
        },

        onChangeLanguage(){
            this.getDcNotifications();
        }
    }
});