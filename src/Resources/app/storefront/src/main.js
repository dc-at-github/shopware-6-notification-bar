import StagebitNotificationBar from "./plugins/stagebit-notification-bar.plugin";

PluginManager = window.PluginManager;

PluginManager.register('StagebitNotificationBar', StagebitNotificationBar, "[data-notification-bar]")