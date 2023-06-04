import DcNotificationBar from "./plugins/dc-notification-bar.plugin";

PluginManager = window.PluginManager;
console.log("asda sasdasd");
PluginManager.register('DcNotificationBar', DcNotificationBar, "[data-notification-bar]")