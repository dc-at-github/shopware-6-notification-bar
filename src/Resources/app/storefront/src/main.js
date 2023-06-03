import DcNotificationBar from "./plugins/dc-notification-bar.plugin";

PluginManager = window.PluginManager;

PluginManager.register('DcNotificationBar', DcNotificationBar, "[data-notification-bar]")