import Plugin from 'src/plugin-system/plugin.class';
import CookieStorage from 'src/helper/storage/cookie-storage.helper';

export default class DcNotificationBar extends Plugin{


    static options = {
        /**
         * cookie expiration time
         * the amount of time until the notification bar will be displayed again
         * default is 60 minutes
         */
        cookieExpiration: 60,
        cookieName: "dc-notification-default"
    };

    /**
     * on initialize, check if cookie has been set to hide the notification bar.
     * if cookie is not set, display the notification bar
     */
    init(){
        if(!this._isCookieSet()) {
            this._registerEvents();
        }
    }

    /**
     * register close notification bar event
     * @private
     */
    _registerEvents(){
        const closeIcon = this.el.querySelector(".close-notification");
        closeIcon.addEventListener("click", this._closeNotificationBar.bind(this));

        this.$emitter.publish("notificationBarEvent");
    }

    /**
     * close the notification bar
     * @private
     */
    _closeNotificationBar(){
        this.el.remove();
        this._setNotificationBarCookie();

        this.$emitter.publish("notificationBarClosed");
    }

    /**
     * display the notification bar
     * @private
     */
    _showNotificationBar(){
        this.el.classList.remove("d-none");
        this.el.classList.add("d-block");

        this.$emitter.publish("showNotificationBar");
    }

    /**
     * check if cookie has been set.
     * if cookie is not set, show the notification bar
     * @returns {boolean}
     * @private
     */
    _isCookieSet(){
        const notificationBarCookie = CookieStorage.getItem(this.options.cookieName);

        if(!notificationBarCookie){
            this._showNotificationBar();
            return false;
        }else{
            this.el.remove();
        }

        return true;
    }

    /**
     * when user clicks on the close icon, a cookie will be set.
     * @private
     */
    _setNotificationBarCookie(){
        const { cookieExpiration, cookieName } = this.options;

        /**
         * the minutes should be converted to days. because,
         * CookieStorage.setItem accept only days.
         * @type {number}
         */
        const expirationTime = cookieExpiration/1440;

        CookieStorage.setItem(cookieName, '1', expirationTime);

        this.$emitter.publish("notificationBarCookiePreference");
    }
}