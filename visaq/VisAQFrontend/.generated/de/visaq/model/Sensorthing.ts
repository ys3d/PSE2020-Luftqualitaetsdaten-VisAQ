/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.model {
    /**
     * Creates a new Sensorthings object with the given id and the specified database link.
     * 
     * @param {string} id      Unique identifier of the object that will be created.
     * @class
     */
    export abstract class Sensorthing<SensorthingT extends Sensorthing<SensorthingT>> {
        /**
         * Unique identifier of the object.
         */
        public id : string;

        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                if(this.id===undefined) this.id = null;
                if(this.id===undefined) this.id = null;
                (() => {
                    this.id = id;
                })();
            } else if(id === undefined) {
                let __args = arguments;
                if(this.id===undefined) this.id = null;
                if(this.id===undefined) this.id = null;
                (() => {
                    this.id = null;
                })();
            } else throw new Error('invalid overload');
        }
    }
    Sensorthing["__class"] = "de.visaq.model.Sensorthing";

}

