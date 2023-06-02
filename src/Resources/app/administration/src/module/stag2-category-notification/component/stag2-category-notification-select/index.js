import template from "./stag2-category-notification-select.html.twig";

const { Component } = Shopware;
const { mapState } = Shopware.Component.getComponentHelper();
const { Criteria } = Shopware.Data;

Component.register("stag2-category-notification-select", {
    template,

    inject: [
        'repositoryFactory'
    ],

    data(){
        return {
            stag2Active: false,
            stag2NotificationId: "",
            isDisabled: true
        }
    },

    computed: {
        ...mapState('swCategoryDetail', [
            'category'
        ]),

        stag2PageNotificationRepository(){
            return this.repositoryFactory.create('stag2_page_notification');
        },

        stag2NotificationRepository(){
            return this.repositoryFactory.create('stag2_notification');
        }
    },

    mounted() {
        this.mountedComponent();
    },

    created(){
        this.createdComponent();
    },

    watch: {
        'stag2Active'(value){
            if(!this.category.extensions.notification){
                this.category.extensions.notification = this.stag2PageNotificationRepository.create(Shopware.Context.api);
            }
            this.category.extensions.notification.active = value;
        },

        'stag2NotificationId'(value){
            if(!this.category.extensions.notification){
                this.category.extensions.notification = this.stag2PageNotificationRepository.create(Shopware.Context.api);
            }
            this.category.extensions.notification.notificationId = value;
        }
    },

    methods: {
        mountedComponent(){
            this.stag2NotificationId = this.category.extensions.notification && this.category.extensions.notification.notificationId;
            this.stag2Active = this.category.extensions.notification && this.category.extensions.notification.active;
        },

        createdComponent(){
            const criteria = new Criteria();
            criteria.setLimit(1);
            this.stag2NotificationRepository
                .search(criteria, Shopware.Context.api)
                .then((result) => {
                    if(result.total > 0) {
                        this.isDisabled = false;
                    }
                });
        }
    }
});