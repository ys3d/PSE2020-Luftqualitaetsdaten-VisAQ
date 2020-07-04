/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.navbar {
    /**
     * The Timeline is used to show the historical data directly on the map. It also implements the
     * NavbarElement to use the show method.
     * @class
     */
    export class Timeline implements de.visaq.view.elements.navbar.NavbarElement {
        /*private*/ time : java.time.Instant;

        /**
         * 
         */
        public show() {
            de.visaq.view.VisAQ.getInstance().userInput();
        }

        /**
         * Returns the time.
         * 
         * @return      {java.time.Instant} The time
         */
        public getTime() : java.time.Instant {
            return this.time;
        }

        /**
         * A Time Data Query occurs when the controller on the timeline is moved. The method set the
         * time of the data query.
         * 
         * @param {java.time.Instant} time      The time
         * @private
         */
        /*private*/ setTime(time : java.time.Instant) {
            this.time = time;
        }

        constructor() {
            if(this.time===undefined) this.time = null;
        }
    }
    Timeline["__class"] = "de.visaq.view.elements.navbar.Timeline";
    Timeline["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];


}

