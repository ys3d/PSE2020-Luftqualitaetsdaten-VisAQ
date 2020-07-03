/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Constructs a new {@link Location}.
     * 
     * @param {string} id          The identifier of the {@link FeatureOfInterest} in the SensorThings
     * standard
     * @param {string} name        The name of the {@link Location}
     * @param {string} description The description of the {@link Location}
     * @param {java.awt.Point} location    A point describing the actual location
     * @class
     * @extends de.visaq.model.Sensorthing
     */
    export class Location extends de.visaq.model.Sensorthing<Location> {
        public name : string;

        public description : string;

        public location : java.awt.Point;

        public constructor(id : string, name : string, description : string, location : java.awt.Point) {
            super(id);
            if(this.name===undefined) this.name = null;
            if(this.description===undefined) this.description = null;
            if(this.location===undefined) this.location = null;
            this.name = name;
            this.description = description;
            this.location = location;
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
    Location["__class"] = "de.visaq.model.Location";

}

