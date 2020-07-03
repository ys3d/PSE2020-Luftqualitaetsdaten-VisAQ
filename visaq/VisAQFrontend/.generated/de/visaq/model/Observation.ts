/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Constructs a new {@link Observation}.
     * 
     * @param {string} id             The identifier of the {@link FeatureOfInterest} in the SensorThings
     * standard
     * @param {java.time.Instant} phenomenonTime The time when the Observation occurred
     * @param {number} result         The result of the {@link Observation}
     * @param {java.time.Instant} resultTime     The Time of the measuring result
     * @class
     * @extends de.visaq.model.Sensorthing
     */
    export class Observation extends de.visaq.model.Sensorthing<de.visaq.model.FeatureOfInterest> implements de.visaq.model.SensorthingTimeStamp {
        public phenomenonTime : java.time.Instant;

        public result : number;

        public resultTime : java.time.Instant;

        public constructor(id : string, phenomenonTime : java.time.Instant, result : number, resultTime : java.time.Instant) {
            super(id);
            if(this.phenomenonTime===undefined) this.phenomenonTime = null;
            if(this.result===undefined) this.result = null;
            if(this.resultTime===undefined) this.resultTime = null;
            this.phenomenonTime = phenomenonTime;
            this.result = result;
            this.resultTime = resultTime;
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
    Observation["__class"] = "de.visaq.model.Observation";
    Observation["__interfaces"] = ["de.visaq.model.SensorthingTimeStamp"];


}

