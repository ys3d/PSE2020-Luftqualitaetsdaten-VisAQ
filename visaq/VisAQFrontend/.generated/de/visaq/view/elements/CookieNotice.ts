/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements {
    /**
     * Sole constructor of the class Cookie Notice.
     * @class
     */
    export class CookieNotice {
        public __acceptance : boolean = false;

        public constructor() {
        }

        /**
         * Opens the Popup Window Cookie Notice.
         */
        public popup() {
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
        }
    }
    CookieNotice["__class"] = "de.visaq.view.elements.CookieNotice";

}

