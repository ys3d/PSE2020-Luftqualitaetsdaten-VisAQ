/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Constructs a new {@link Sensor}.
     * 
     * @param {string} id          The identifier of the {@link Sensor} in the SensorThings
     * standard
     * @param {string} description The description of the {@link Sensor}
     * @param {string} name        The name of the {@link Sensor}
     * @param {*} properties  Several properties of the {@link Sensor}
     * @class
     * @extends de.visaq.model.Sensorthing
     */
    export class Sensor extends de.visaq.model.Sensorthing<Sensor> {
        public description : string;

        public name : string;

        public properties : any;

        public constructor(id : string, description : string, name : string, properties : any) {
            super(id);
            if(this.description===undefined) this.description = null;
            if(this.name===undefined) this.name = null;
            if(this.properties===undefined) this.properties = null;
            this.description = description;
            this.name = name;
            this.properties = properties;
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
    Sensor["__class"] = "de.visaq.model.Sensor";

}

