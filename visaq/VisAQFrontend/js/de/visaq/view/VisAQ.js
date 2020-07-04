/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            /**
             * Main class of the Frontend.
             * @class
             */
            class VisAQ {
                constructor() {
                    /*private*/ this.view = null;
                    if (this.airQualityData === undefined)
                        this.airQualityData = null;
                    if (this.navbar === undefined)
                        this.navbar = null;
                }
                static instance_$LI$() { if (VisAQ.instance == null)
                    VisAQ.instance = new VisAQ(); return VisAQ.instance; }
                ;
                /**
                 * Gets the current Language instance.
                 *
                 * @return {de.visaq.view.VisAQ} The Language instance.
                 */
                static getInstance() {
                    VisAQ.instance = VisAQ.instance == null ? new VisAQ() : VisAQ.instance;
                    return VisAQ.instance_$LI$();
                }
                /**
                 * Sets the current VisAQ instance.
                 *
                 * @param {de.visaq.view.VisAQ} visAQ     The VisAQ instance.
                 */
                static setInstance(visAQ) {
                    VisAQ.instance = visAQ;
                }
                /**
                 * Main method of the Frontend.
                 *
                 * @param {Array} args Input
                 */
                static main(args) {
                    alert("This example writes \'Hello world\' in the document!");
                    console.info("Starting VisAQ.js example");
                    let e = document.getElementById("target");
                    e.innerHTML = "Hello world!";
                    VisAQ.setInstance(new VisAQ());
                    let cookieNotice = new de.visaq.view.elements.CookieNotice();
                    cookieNotice.popup();
                    let airQualityData1;
                }
                /**
                 * Notifies the Navbar about a user input.
                 */
                userInput() {
                    this.navbar.notifyObserver();
                    this.navbar.show();
                    this.navbar.showView();
                }
            }
            view.VisAQ = VisAQ;
            VisAQ["__class"] = "de.visaq.view.VisAQ";
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
de.visaq.view.VisAQ.instance_$LI$();
de.visaq.view.VisAQ.main(null);
