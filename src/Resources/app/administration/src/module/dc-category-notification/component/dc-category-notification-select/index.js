import template from "./dc-category-notification-select.html.twig";

const { Component } = Shopware;
const { mapState } = Shopware.Component.getComponentHelper();
const { Criteria } = Shopware.Data;

Component.register("dc-category-notification-select", {
    template,

    inject: [
        'repositoryFactory'
    ],

    data(){
        return {
            dcActive: false,
            dcNotificationId: "",
            isDisabled: true
        }
    },

    computed: {
        ...mapState('swCategoryDetail', [
            'category'
        ]),

        dcPageNotificationRepository(){
            return this.repositoryFactory.create('dc_page_notification');
        },

        dcNotificationRepository(){
            return this.repositoryFactory.create('dc_notification');
        }
    },

    mounted() {
        this.mountedComponent();
    },

    created(){
        this.createdComponent();
    },

    watch: {
        'dcActive'(value){
            if(!this.category.extensions.notification){
                this.category.extensions.notification = this.dcPageNotificationRepository.create(Shopware.Context.api);
            }
            this.category.extensions.notification.active = value;
        },

        'dcNotificationId'(value){
            if(!this.category.extensions.notification){
                this.category.extensions.notification = this.dcPageNotificationRepository.create(Shopware.Context.api);
            }
            this.category.extensions.notification.notificationId = value;
        }
    },

    methods: {
        mountedComponent(){
            this.dcNotificationId = this.category.extensions.notification && this.category.extensions.notification.notificationId;
            this.dcActive = this.category.extensions.notification && this.category.extensions.notification.active;
        },

        createdComponent(){
            const criteria = new Criteria();
            criteria.setLimit(1);
            this.dcNotificationRepository
                .search(criteria, Shopware.Context.api)
                .then((result) => {
                    if(result.total > 0) {
                        this.isDisabled = false;
                    }
                });
        }
    }
});