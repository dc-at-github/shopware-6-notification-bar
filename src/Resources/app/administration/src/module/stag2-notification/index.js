import "./component";
import "./page";

const { Module } = Shopware;

import enGB from "./snippet/en-GB.json";
import deDE from "./snippet/de-DE.json";

Module.register("stag2-notification", {
    type: "plugin",
    name: "stagebit-global-notification",
    title: "Stag2 Notification",
    description: "It's a good way to show some notification, important Alerts and Offers on page load.",
    snippet:{
        "en-GB": enGB,
        "de-DE": deDE
    },
    version: "1.0.0",
    targetVersion: "1.0.0",
    icon: "stag2-plugin-icon",
    routes: {
        list: {
            component: "stag2-notification",
            path: "list",
            meta: {
                parentPath: "sw.settings.index"
            }
        },
        create: {
            component: "stag2-notification-create",
            path:"create",
            meta: {
                parentPath: "stag2.notification.list"
            }
        },
        detail: {
            component: "stag2-notification-detail",
            path: "detail/:id",
            meta: {
                parentPath: "stag2.notification.list"
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
        to: "stag2.notification.list",
        iconComponent: "stag2-plugin-icon",
        backgroundEnabled: true
    }
});