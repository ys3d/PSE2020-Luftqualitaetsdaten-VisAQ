/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Constructs a new {@link HistoricalLocation}.
     * 
     * @param {string} id   The identifier of the {@link  HistoricalLocation} in the SensorThings standard
     * @param {java.time.Instant} time The time
     * @class
     * @extends de.visaq.model.Sensorthing
     */
    export class HistoricalLocation extends de.visaq.model.Sensorthing<de.visaq.model.Datastream> implements de.visaq.model.SensorthingTimeStamp {
        public time : java.time.Instant;

        public constructor(id : string, time : java.time.Instant) {
            super(id);
            if(this.time===undefined) this.time = null;
            this.time = time;
        }

        /**
         * 
         * @param {*} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean {
            return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this,obj));
        }

        /**
         * {@inheritDoc}
         * @param {*} other
         * @return {boolean}
         */
        public isOlder(other : de.visaq.model.SensorthingTimeStamp) : boolean {
            return false;
        }

        /**
         * {@inheritDoc}
         * @param {*} other
         * @return {boolean}
         */
        public isNewer(other : de.visaq.model.SensorthingTimeStamp) : boolean {
            return false;
        }

        /**
         * {@inheritDoc}
         * @param {*} other
         * @return {boolean}
         */
        public isEqualOld(other : de.visaq.model.SensorthingTimeStamp) : boolean {
            return false;
        }

        /**
         * {@inheritDoc}
         * @return {java.time.Instant}
         */
        public getTimeStamp() : java.time.Instant {
            return null;
        }
    }
    HistoricalLocation["__class"] = "de.visaq.model.HistoricalLocation";
    HistoricalLocation["__interfaces"] = ["de.visaq.model.SensorthingTimeStamp"];


}

