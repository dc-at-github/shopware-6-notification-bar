const { Component } = Shopware;

Component.extend("dc-notification-create", "dc-notification-detail", {
    methods: {
        getDcNotification(){
            this.dcNotification = this.dcNotificationRepository.create(Shopware.Context.api);
            this.isLoading = false;
        },
        onSave(){
            this.dcNotificationRepository
                .save(this.dcNotification, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.processSuccess = true;
                    this.createNotificationSuccess({
                        title: "Succeess!",
                        message: "Notification Saved successfully."
                    });

                    this.$router.push({
                        name: 'dc.notification.detail',
                        params: {
                            id: this.dcNotification.id
                        }
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
        }
    }
});