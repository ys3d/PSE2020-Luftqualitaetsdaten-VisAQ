/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view {
    /**
     * Main class of the Frontend.
     * @class
     */
    export class VisAQ {
        /*private*/ airQualityData : de.visaq.view.elements.airquality.AirQualityData[];

        static instance : VisAQ; public static instance_$LI$() : VisAQ { if(VisAQ.instance == null) VisAQ.instance = new VisAQ(); return VisAQ.instance; };

        /**
         * Gets the current Language instance.
         * 
         * @return {de.visaq.view.VisAQ} The Language instance.
         */
        public static getInstance() : VisAQ {
            VisAQ.instance = VisAQ.instance == null?new VisAQ():VisAQ.instance;
            return VisAQ.instance_$LI$();
        }

        /**
         * Sets the current VisAQ instance.
         * 
         * @param {de.visaq.view.VisAQ} visAQ     The VisAQ instance.
         */
        public static setInstance(visAQ : VisAQ) {
            VisAQ.instance = visAQ;
        }

        /*private*/ view : Array<de.visaq.view.View> = null;

        static navbar : de.visaq.view.elements.navbar.Navbar = null;

        /**
         * Main method of the Frontend.
         * 
         * @param {Array} args Input
         */
        public static main(args : string[]) {
            VisAQ.setInstance(new VisAQ());
            let cookieNotice : de.visaq.view.elements.CookieNotice = new de.visaq.view.elements.CookieNotice();
            window.onload = ((cookieNotice) => {
                return (e) => {
                    cookieNotice.popup();
                    VisAQ.navbar.show();
                    return e;
                }
            })(cookieNotice);
            let airQualityData : de.visaq.view.elements.airquality.AirQualityData;
        }

        /**
         * Notifies the Navbar about a user input.
         */
        public userInput() {
            VisAQ.navbar.notifyObserver();
            VisAQ.navbar.show();
            VisAQ.navbar.showView();
        }

        constructor() {
            if(this.airQualityData===undefined) this.airQualityData = null;
        }
    }
    VisAQ["__class"] = "de.visaq.view.VisAQ";

}


de.visaq.view.VisAQ.instance_$LI$();

de.visaq.view.VisAQ.main(null);
