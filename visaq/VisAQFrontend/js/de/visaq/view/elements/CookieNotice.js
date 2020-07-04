/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var elements;
            (function (elements) {
                /**
                 * Sole constructor of the class Cookie Notice.
                 * @class
                 */
                class CookieNotice {
                    constructor() {
                        this.__acceptance = false;
                        /*private*/ this.date = new jsweet.lang.Date();
                    }
                    /**
                     * Opens the Popup Window Cookie Notice.
                     */
                    popup() {
                        alert();
                    }
                    /**
                     * The Users acceptance of the CookieNotice.
                     *
                     * @param {boolean} acceptance The instance of acceptance
                     */
                    acceptance(acceptance) {
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
                elements.CookieNotice = CookieNotice;
                CookieNotice["__class"] = "de.visaq.view.elements.CookieNotice";
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
