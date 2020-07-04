/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements {
    /**
     * Sole constructor of the class Cookie Notice.
     * @class
     */
    export class CookieNotice {
        public __acceptance : boolean = false;

        /*private*/ date : jsweet.lang.Date = new jsweet.lang.Date();

        public constructor() {
        }

        /**
         * Opens the Popup Window Cookie Notice.
         */
        public popup() {
            alert();
        }

        /**
         * The Users acceptance of the CookieNotice.
         * 
         * @param {boolean} acceptance The instance of acceptance
         */
        public acceptance(acceptance : boolean) {
            this.storeUserData();
        }

        /**
         * Stores the user data on the client side
         * @private
         */
        /*private*/ storeUserData() {
            document.cookie = "username=" + Math.random() + ";expire=" + this.date.setUTCFullYear(this.date.getFullYear() + 1, 1.0, 1.0) + "00:00:00 UTC;path=/";
        }
    }
    CookieNotice["__class"] = "de.visaq.view.elements.CookieNotice";

}

