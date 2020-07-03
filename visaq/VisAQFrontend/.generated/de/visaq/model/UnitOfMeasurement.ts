/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Constructs a new {@link UnitOfMeasurement}.
     * 
     * @param {string} name       The name of the {@link UnitOfMeasurement}
     * @param {string} symbol     The symbol of the {@link UnitOfMeasurement}
     * @param {string} definition The definition of the {@link UnitOfMeasurement}
     * @class
     */
    export class UnitOfMeasurement {
        public symbol : string;

        public name : string;

        public definition : string;

        public constructor(name : string, symbol : string, definition : string) {
            if(this.symbol===undefined) this.symbol = null;
            if(this.name===undefined) this.name = null;
            if(this.definition===undefined) this.definition = null;
            this.name = name;
            this.symbol = symbol;
            this.definition = definition;
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
    UnitOfMeasurement["__class"] = "de.visaq.model.UnitOfMeasurement";

}

