import "./component";
import "./page";

const { Module } = Shopware;

import enGB from "./snippet/en-GB.json";
import deDE from "./snippet/de-DE.json";

Module.register("dc-notification", {
    type: "plugin",
    name: "dc-global-notification",
    title: "Dc Notification",
    description: "It's a good way to show some notification, important Alerts and Offers on page load.",
    snippet:{
        "en-GB": enGB,
        "de-DE": deDE
    },
    version: "1.0.0",
    targetVersion: "1.0.0",
    icon: "dc-plugin-icon",
    routes: {
        list: {
            component: "dc-notification",
            path: "list",
            meta: {
                parentPath: "sw.settings.index"
            }
        },
        create: {
            component: "dc-notification-create",
            path:"create",
            meta: {
                parentPath: "dc.notification.list"
            }
        },
        detail: {
            component: "dc-notification-detail",
            path: "detail/:id",
            meta: {
                parentPath: "dc.notification.list"
            }
        },
        "page-notification": {
            component: "sw-category-page-notification",
            path: "page-notification",
            meta: {
                parentPath: "sw.category.index",
                privilege: 'category.viewer'
            }
        }
    },
    settingsItem: {
        group: "plugins",
        to: "dc.notification.list",
        iconComponent: "dc-plugin-icon",
        backgroundEnabled: true
    }
});