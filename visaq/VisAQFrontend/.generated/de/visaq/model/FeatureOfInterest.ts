/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Constructs a new {@link FeatureOfInterest}.
     * 
     * @param {string} id               The identifier of the {@link FeatureOfInterest} in the SensorThings
     * standard
     * @param {string} description      The description of the {@link FeatureOfInterest}
     * @param {string} name             The name of the {@link FeatureOfInterest}
     * @param {*} features         Features
     * @class
     * @extends de.visaq.model.Sensorthing
     */
    export class FeatureOfInterest extends de.visaq.model.Sensorthing<FeatureOfInterest> {
        public description : string;

        public name : string;

        public features : any;

        public constructor(id : string, description : string, name : string, features : any) {
            super(id);
            if(this.description===undefined) this.description = null;
            if(this.name===undefined) this.name = null;
            if(this.features===undefined) this.features = null;
            this.description = description;
            this.name = name;
            this.features = features;
        }

        /**
         * 
         * @param {*} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean {
            return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this,obj));
        }
    }
    FeatureOfInterest["__class"] = "de.visaq.model.FeatureOfInterest";

}

