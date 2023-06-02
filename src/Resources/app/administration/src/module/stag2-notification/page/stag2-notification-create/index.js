const { Component } = Shopware;

Component.extend("stag2-notification-create", "stag2-notification-detail", {
    methods: {
        getStagNotification(){
            this.stag2Notification = this.stag2NotificationRepository.create(Shopware.Context.api);
            this.isLoading = false;
        },
        onSave(){
            this.stag2NotificationRepository
                .save(this.stag2Notification, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.processSuccess = true;
                    this.createNotificationSuccess({
                        title: "Succeess!",
                        message: "Notification Saved successfully."
                    });

                    this.$router.push({
                        name: 'stag2.notification.detail',
                        params: {
                            id: this.stag2Notification.id
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