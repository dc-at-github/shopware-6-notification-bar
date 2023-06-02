(this.webpackJsonp=this.webpackJsonp||[]).push([["stag2-global-notification"],{"38Su":function(t,i){t.exports='{% block sw_category_view_tabs_seo %}\n    {% parent %}\n\n    <sw-tabs-item\n            :route="{ name: \'sw.category.notification\'}"\n            title="Notifications">\n        Notifications\n    </sw-tabs-item>\n\n{% endblock %}'},"KCl+":function(t){t.exports=JSON.parse('{"stag2":{"notification":{"general":{"note":"Note!","commonFieldInfo":"the below changes are common for all languages","categoryHelpText":"you don\'t have any notification to show.","noRecordTitle":"No Notification!","noRecordSubline":"There is no notification found in the record"},"header":{"new":"Create Notification","update":"Update Notification"},"list":{"title":"Notification"},"column":{"title":"Title","active":"Active"},"button":{"save":"Save","create":"Create"},"generalTitle":"Notification General","field":{"activeNotification":"Active Notification Bar","title":"Title","displayTitle":"Display Title","content":"Content","displayAs":"Display As","animationType":"Animation Type","border":"Border","barPosition":"Bar Position","barWidth":"Bar Width","cookieLifeTime":"Cookie Lifetime in Minutes","titleColor":"Title Color","iconColor":"Close Icon Color","overlayColor":"Popup Overlay Color","backgroundColor":"Background Color","borderColor":"Border Color","activeForCategory":"Enable Separate Notification"},"placeholder":{"title":"Title","cookieLifeTime":"time in minute"}}}}')},T38B:function(t,i,e){},Uzcy:function(t,i,e){},WBkV:function(t,i,e){"use strict";e.r(i);var n=e("cXMi"),o=e.n(n);e("aT+u");const{Component:a}=Shopware;a.register("stag2-plugin-icon",{template:o.a});var s=e("j1Z6"),c=e.n(s);const{Component:l,Mixin:r}=Shopware,{Criteria:g}=Shopware.Data;l.register("stag2-notification",{template:c.a,mixins:[r.getByName("notification"),r.getByName("listing")],inject:["repositoryFactory"],data:()=>({isLoading:!1,stag2Notifications:null,total:0}),computed:{notificationRepository(){return this.repositoryFactory.create("stag2_notification")},columns(){return[{property:"title",index:"title",label:this.$t("stag2.notification.column.title")},{property:"active",index:"active",label:this.$t("stag2.notification.column.active")}]}},created(){this.createdComponent()},methods:{createdComponent(){this.getStag2Notifications()},getStag2Notifications(){const t=new g;this.notificationRepository.search(t,Shopware.Context.api).then((t=>{this.total=t.total,this.stag2Notifications=t}))},onChangeLanguage(){this.getStag2Notifications()}}});var d=e("l9zn"),p=e.n(d);e("qjaH");const{Component:f,Mixin:h}=Shopware,{Criteria:b}=Shopware.Data;f.register("stag2-notification-detail",{template:p.a,inject:["repositoryFactory"],mixins:[h.getByName("notification")],data:()=>({stag2Notification:null,isLoading:!1,processSuccess:!1,langEnabled:!0,isPopup:!1,itemId:""}),computed:{stag2NotificationRepository(){return this.repositoryFactory.create("stag2_notification")},getDisplayAsOptions:()=>[{value:"bar",label:"Bar"},{value:"popup",label:"Popup"}],getAnimationOptions:()=>[{value:"fade-in",label:"Fade In"},{value:"slide-up",label:"Slide Up"},{value:"slide-down",label:"Slide Down"},{value:"slide-left",label:"Slide Left"},{value:"slide-right",label:"Slide Right"}],getBorderTypeOptions:()=>[{value:"no-border",label:"No Border"},{value:"solid",label:"Solid"},{value:"dashed",label:"dashed"}],getPositionOptions:()=>[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"},{value:"below-header",label:"Below Header"},{value:"above-footer",label:"Above Footer"}],getBarWidthOptions:()=>[{value:"box-content",label:"Box Content"},{value:"full-width",label:"Full Width"}]},created(){this.createdComponent()},watch:{"stag2Notification.displayAs"(t){this.isPopup="popup"==t}},methods:{createdComponent(){this.getStagNotification(),this.stag2Notification&&this.stag2Notification.isNew()&&Shopware.Context.api.languageId!==Shopware.Context.api.systemLanguageId&&Shopware.State.commit("context/setApiLanguageId",Shopware.Context.api.systemLanguageId)},async getStagNotification(){this.isLoading=!0,await this.stag2NotificationRepository.get(this.$route.params.id,Shopware.Context.api).then((t=>{this.stag2Notification=t,this.isLoading=!1}))},onSave(){this.isLoading=!0,this.stag2NotificationRepository.save(this.stag2Notification,Shopware.Context.api).then((()=>{this.isLoading=!1,this.processSuccess=!0,this.createNotificationSuccess({title:"Succeess!",message:"Notification Saved successfully."})})).catch((t=>{this.isLoading=!1,t.response.data&&t.response.data.errors&&t.response.data.errors.forEach((t=>{this.createNotificationWarning({title:"Error!",message:t.detail,duration:1e4})}))}))},saveFinish(){this.processSuccess=!1},onChangeLanguage(){this.getStagNotification()}}});e("yrou");var m=e("KCl+"),u=e("g3Ub");const{Module:w}=Shopware;w.register("stag2-notification",{type:"plugin",name:"stagebit-global-notification",title:"Stag2 Notification",description:"It's a good way to show some notification, important Alerts and Offers on page load.",snippet:{"en-GB":m,"de-DE":u},version:"1.0.0",targetVersion:"1.0.0",icon:"stag2-plugin-icon",routes:{list:{component:"stag2-notification",path:"list",meta:{parentPath:"sw.settings.index"}},create:{component:"stag2-notification-create",path:"create",meta:{parentPath:"stag2.notification.list"}},detail:{component:"stag2-notification-detail",path:"detail/:id",meta:{parentPath:"stag2.notification.list"}},"page-notification":{component:"sw-category-page-notification",path:"page-notification",meta:{parentPath:"sw.category.index",privilege:"category.viewer"}}},settingsItem:{group:"plugins",to:"stag2.notification.list",iconComponent:"stag2-plugin-icon",backgroundEnabled:!0}});var y=e("eL9q"),v=e.n(y);const{Component:_}=Shopware,{mapState:k}=Shopware.Component.getComponentHelper(),{Criteria:N}=Shopware.Data;_.register("stag2-category-notification-select",{template:v.a,inject:["repositoryFactory"],data:()=>({stag2Active:!1,stag2NotificationId:"",isDisabled:!0}),computed:{...k("swCategoryDetail",["category"]),stag2PageNotificationRepository(){return this.repositoryFactory.create("stag2_page_notification")},stag2NotificationRepository(){return this.repositoryFactory.create("stag2_notification")}},mounted(){this.mountedComponent()},created(){this.createdComponent()},watch:{stag2Active(t){this.category.extensions.notification||(this.category.extensions.notification=this.stag2PageNotificationRepository.create(Shopware.Context.api)),this.category.extensions.notification.active=t},stag2NotificationId(t){this.category.extensions.notification||(this.category.extensions.notification=this.stag2PageNotificationRepository.create(Shopware.Context.api)),this.category.extensions.notification.notificationId=t}},methods:{mountedComponent(){this.stag2NotificationId=this.category.extensions.notification&&this.category.extensions.notification.notificationId,this.stag2Active=this.category.extensions.notification&&this.category.extensions.notification.active},createdComponent(){const t=new N;t.setLimit(1),this.stag2NotificationRepository.search(t,Shopware.Context.api).then((t=>{t.total>0&&(this.isDisabled=!1)}))}}}),Shopware.Module.register("stag2-category-notification",{routeMiddleware(t,i){"sw.category.detail"===i.name&&i.children.push({name:"sw.category.notification",path:"/sw/category/index/:id/notification",component:"stag2-category-notification-select",meta:{parentPath:"sw.category.index"}}),t(i)}});var C=e("38Su"),S=e.n(C);Shopware.Component.override("sw-category-view",{template:S.a})},"aT+u":function(t,i,e){var n=e("Uzcy");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e("SZ7m").default)("03b330be",n,!0,{})},cXMi:function(t,i){t.exports='{% block stag2_notification_plugin_icon %}\n    <div class="stag2-notification-plugin-icon">\n        <img :src=\'"/dcglobalnotification/static/img/plugin.png" | asset\' class="stag2-notification-plugin-icon" />\n    </div>\n{% endblock %}'},eL9q:function(t,i){t.exports='{% block stag2_category_notification_select %}\n    <sw-card title="Notification">\n\n        {% block stag2_page_notification_active_field %}\n            <sw-container columns="repeat(auto-fit, minmax(150px, 220px))" gap="0px 30px" align="center">\n                <sw-switch-field v-model="stag2Active"\n                                 :label="$tc(\'stag2.notification.field.activeForCategory\')"\n                                 :disabled="isDisabled">\n                </sw-switch-field>\n                <sw-help-text :text="$tc(\'stag2.notification.general.categoryHelpText\')"\n                              :width="300"\n                              tooltipPosition="top"\n                              :showDelay="100"\n                              :hideDelay="100" v-if="isDisabled">\n                    you don\'t have any notification to show.\n                </sw-help-text>\n            </sw-container>\n        {% endblock %}\n\n        {% block stag2_notification_active_field %}\n            <template v-if="stag2Active">\n                <sw-entity-single-select label=""\n                                         entity="stag2_notification"\n                                         labelProperty="title"\n                                         valueProperty="id"\n                                         v-model="stag2NotificationId">\n                </sw-entity-single-select>\n            </template>\n        {% endblock %}\n\n    </sw-card>\n{% endblock %}'},g3Ub:function(t){t.exports=JSON.parse('{"stag2":{"notification":{"general":{"note":"Notiz!","commonFieldInfo":"Die folgenden Änderungen gelten für alle Sprachen","categoryHelpText":"Sie haben keine Benachrichtigung zum Anzeigen.","noRecordTitle":"Keine Benachrichtigung!","noRecordSubline":"Es wurde keine Benachrichtigung im Datensatz gefunden"},"header":{"new":"Benachrichtigung erstellen","update":"Update-Benachrichtigung"},"list":{"title":"Benachrichtigung"},"column":{"title":"Titel","active":"Aktiv"},"button":{"save":"Speichern","create":"Schaffen"},"generalTitle":"Benachrichtigung Allgemein","field":{"activeNotification":"Aktive Benachrichtigungsleiste","title":"Titel","displayTitle":"Titel anzeigen","content":"Inhalt","displayAs":"Darstellen als","animationType":"Animationstyp","border":"Saum","barPosition":"Balkenposition","barWidth":"Balkenbreite","cookieLifeTime":"Cookie-Lebensdauer in Minuten","titleColor":"Titelfarbe","iconColor":"Symbolfarbe schließen","overlayColor":"Popup-Overlay-Farbe","backgroundColor":"Hintergrundfarbe","borderColor":"Randfarbe","activeForCategory":"Separate Benachrichtigung aktivieren"},"placeholder":{"title":"Titel","cookieLifeTime":"Zeit in Minute"}}}}')},j1Z6:function(t,i){t.exports='{% block stag2_notification_config_container %}\n    <sw-page class="sw-stag2-notification">\n        {% block sw_stag2_notification_header %}\n            <template slot="smart-bar-header">\n                <h2>{{ $tc(\'stag2.notification.list.title\') }}</h2>\n            </template>\n        {% endblock %}\n\n        {% block sw_stag2_actions_container %}\n            <template slot="smart-bar-actions">\n                {% block sw_stag2_action_create %}\n                    <sw-button\n                            :routerLink="{name:\'stag2.notification.create\'}"\n                            class="sw_stag2_notification__action_create"\n                            :isLoading="isLoading"\n                            variant="primary">\n                        {{ $tc(\'stag2.notification.button.create\') }}\n                    </sw-button>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n\n        {% block sw_stag2_language_switch %}\n            <template slot="language-switch">\n                <sw-language-switch @on-change="onChangeLanguage"></sw-language-switch>\n            </template>\n        {% endblock %}\n\n        <template slot="content">\n                {% block stag2_notification_list %}\n                    <sw-entity-listing\n                            v-if="stag2Notifications && total > 0"\n                            :items="stag2Notifications"\n                            detailRoute="stag2.notification.detail"\n                            :repository="notificationRepository"\n                            :showSelection="true"\n                            :columns="columns"\n                            :isLoading="isLoading">\n\n                        {% block stag2_notification_column_active %}\n                            <template #column-active="{item}">\n                                <sw-icon name="default-basic-shape-circle-filled" v-if="item.active" size="12px" color="#1abc9c" />\n                                <sw-icon name="default-basic-shape-circle-filled" v-if="!item.active" size="12px" color="#fc427b" />\n                            </template>\n                        {% endblock %}\n\n                    </sw-entity-listing>\n                {% endblock %}\n\n                {% block stag2_notification_no_record %}\n                    <template v-if="!isLoading && !total">\n                        <sw-empty-state\n                                :title="$tc(\'stag2.notification.general.noRecordTitle\')"\n                                :subline="$tc(\'stag2.notification.general.noRecordSubline\')">\n                        </sw-empty-state>\n                    </template>\n                {% endblock %}\n        </template>\n\n    </sw-page>\n{% endblock %}'},l9zn:function(t,i){t.exports='{% block stag2_notification_detail_page %}\n    <sw-page class="stag2-notification-detail-page">\n        {% block stag2_notification_detail_header %}\n            <template slot="smart-bar-header">\n                <h2 v-if="stag2Notification && stag2Notification.isNew()">{{ $tc(\'stag2.notification.header.new\') }}</h2>\n                <h2 v-if="stag2Notification && !stag2Notification.isNew()">\n                    {{ $t(\'stag2.notification.header.update\') }}\n                    - "{{ stag2Notification.translated.title }}"\n                </h2>\n            </template>\n        {% endblock %}\n\n        {% block stag2_notification_detail_actions %}\n            <template slot="smart-bar-actions">\n                {% block stag2_notification_detail_action_btn %}\n                    <sw-button-process\n                            variant="primary"\n                            :isLoading="isLoading"\n                            :processSuccess="processSuccess"\n                            :disabled="isLoading"\n                            @click.prevent="onSave">\n                        {{ $t(\'stag2.notification.button.save\') }}\n                    </sw-button-process>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block stag2_notification_language_chooser %}\n            <template #language-switch>\n                <sw-language-switch\n                        slot="language-switch"\n                        :disabled="stag2Notification && stag2Notification.isNew()"\n                        @on-change="onChangeLanguage">\n                </sw-language-switch>\n            </template>\n        {% endblock %}\n\n        {% block stag2_notification_detail_content %}\n            <sw-card-view\n                    slot="content"\n                    :isLoading="isLoading"\n                    v-if="stag2Notification">\n                <sw-card :title="$tc(\'stag2.notification.generalTitle\')">\n\n                    {% block stag2_notification_active_field %}\n                        <sw-switch-field v-model="stag2Notification.active"\n                                         :label="$tc(\'stag2.notification.field.activeNotification\')">\n                        </sw-switch-field>\n                    {% endblock %}\n\n                    {% block stag2_notification_title_field %}\n                        <sw-field\n                                v-model="stag2Notification.title"\n                                :label="$tc(\'stag2.notification.field.title\')"\n                                :placeholder="$tc(\'stag2.notification.placeholder.title\')"\n                                validation="required">\n                        </sw-field>\n                    {% endblock %}\n\n                    {% block stag2_notification_display_title_field %}\n                        <sw-switch-field v-model="stag2Notification.displayTitle"\n                                         :label="$tc(\'stag2.notification.field.displayTitle\')">\n                        </sw-switch-field>\n                    {% endblock %}\n\n                    {% block stag2_notification_content_field %}\n                        <sw-text-editor v-model="stag2Notification.content"\n                                        :label="$tc(\'stag2.notification.field.content\')">\n                        </sw-text-editor>\n                    {% endblock %}\n\n                </sw-card>\n\n                <sw-card title="Notification Bar Configuration">\n\n                    <label class="help-description">\n                        <b>{{ $tc(\'stag2.notification.general.note\') }}</b>\n                        {{ $tc(\'stag2.notification.general.commonFieldInfo\') }}\n                    </label>\n\n                    {% block stag2_notification_display_as_field %}\n                        <template>\n                            <sw-single-select\n                                    v-model="stag2Notification.displayAs"\n                                    :options="getDisplayAsOptions"\n                                    :label="$tc(\'stag2.notification.field.displayAs\')">\n                            </sw-single-select>\n                        </template>\n                    {% endblock %}\n\n                    {% block stag2_notification_animation_type_field %}\n                        <template v-if="isPopup">\n                            <sw-single-select\n                                    v-model="stag2Notification.animationType"\n                                    :options="getAnimationOptions"\n                                    :label="$tc(\'stag2.notification.field.animationType\')">\n                            </sw-single-select>\n                        </template>\n                    {% endblock %}\n\n                    {% block stag2_notification_border_type_field %}\n                        <template>\n                            <sw-single-select\n                                    v-model="stag2Notification.borderType"\n                                    :options="getBorderTypeOptions"\n                                    :label="$tc(\'stag2.notification.field.border\')">\n                            </sw-single-select>\n                        </template>\n                    {% endblock %}\n\n                    {% block stag2_notification_position_field %}\n                        <template v-if="!isPopup">\n                            <sw-single-select\n                                    v-model="stag2Notification.position"\n                                    :options="getPositionOptions"\n                                    :label="$tc(\'stag2.notification.field.barPosition\')">\n                            </sw-single-select>\n                        </template>\n                    {% endblock %}\n\n                    {% block stag2_notification_bar_width_field %}\n                        <template v-if="!isPopup">\n                            <sw-single-select\n                                    v-model="stag2Notification.width"\n                                    :options="getBarWidthOptions"\n                                    :label="$tc(\'stag2.notification.field.barWidth\')">\n                            </sw-single-select>\n                        </template>\n                    {% endblock %}\n\n                    {% block stag2_notification_cookie_field %}\n                        <sw-number-field\n                                v-model="stag2Notification.cookieLifeTime"\n                                :label="$tc(\'stag2.notification.field.cookieLifeTime\')"\n                                :placeholder="$tc(\'stag2.notification.placeholder.cookieLifeTime\')"\n                                validation="required">\n                        </sw-number-field>\n                    {% endblock %}\n\n                </sw-card>\n\n                <sw-card title="Colors">\n\n\n                    <label class="help-description">\n                        <b>{{ $tc(\'stag2.notification.general.note\') }}</b>\n                        {{ $tc(\'stag2.notification.general.commonFieldInfo\') }}\n                    </label>\n\n                    {% block stag2_notification_title_color_field %}\n                        <sw-colorpicker\n                                v-model="stag2Notification.titleColor"\n                                :label="$tc(\'stag2.notification.field.titleColor\')">\n                        </sw-colorpicker>\n                    {% endblock %}\n\n                    {% block stag2_notification_icon_color_field %}\n                        <sw-colorpicker\n                                v-model="stag2Notification.iconColor"\n                                :label="$tc(\'stag2.notification.field.iconColor\')">\n                        </sw-colorpicker>\n                    {% endblock %}\n\n                    {% block stag2_notification_overlay_color_field %}\n                        <template v-if="isPopup">\n                            <sw-colorpicker\n                                    v-model="stag2Notification.overlayColor"\n                                    :label="$tc(\'stag2.notification.field.overlayColor\')">\n                            </sw-colorpicker>\n                        </template>\n                    {% endblock %}\n\n                    {% block stag2_notification_background_color_field %}\n                        <sw-colorpicker\n                                v-model="stag2Notification.backgroundColor"\n                                :label="$tc(\'stag2.notification.field.backgroundColor\')">\n                        </sw-colorpicker>\n                    {% endblock %}\n\n                    {% block stag2_notification_border_color_field %}\n                        <sw-colorpicker\n                                v-model="stag2Notification.borderColor"\n                                :label="$tc(\'stag2.notification.field.borderColor\')">\n                        </sw-colorpicker>\n                    {% endblock %}\n\n                </sw-card>\n            </sw-card-view>\n        {% endblock %}\n    </sw-page>\n{% endblock %}'},qjaH:function(t,i,e){var n=e("T38B");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e("SZ7m").default)("10a88b6a",n,!0,{})},yrou:function(t,i){const{Component:e}=Shopware;e.extend("stag2-notification-create","stag2-notification-detail",{methods:{getStagNotification(){this.stag2Notification=this.stag2NotificationRepository.create(Shopware.Context.api),this.isLoading=!1},onSave(){this.stag2NotificationRepository.save(this.stag2Notification,Shopware.Context.api).then((()=>{this.isLoading=!1,this.processSuccess=!0,this.createNotificationSuccess({title:"Succeess!",message:"Notification Saved successfully."}),this.$router.push({name:"stag2.notification.detail",params:{id:this.stag2Notification.id}})})).catch((t=>{this.isLoading=!1,t.response.data&&t.response.data.errors&&t.response.data.errors.forEach((t=>{this.createNotificationWarning({title:"Error!",message:t.detail,duration:1e4})}))}))}}})}},[["WBkV","runtime","vendors-node"]]]);