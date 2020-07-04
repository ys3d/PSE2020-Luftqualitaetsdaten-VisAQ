/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
            /**
             * Creates a new Sensorthings object with the given id and the specified database link.
             *
             * @param {string} id      Unique identifier of the object that will be created.
             * @class
             */
            class Sensorthing {
                constructor(id) {
                    if (((typeof id === 'string') || id === null)) {
                        let __args = arguments;
                        if (this.id === undefined)
                            this.id = null;
                        if (this.id === undefined)
                            this.id = null;
                        (() => {
                            this.id = id;
                        })();
                    }
                    else if (id === undefined) {
                        let __args = arguments;
                        if (this.id === undefined)
                            this.id = null;
                        if (this.id === undefined)
                            this.id = null;
                        (() => {
                            this.id = null;
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            model.Sensorthing = Sensorthing;
            Sensorthing["__class"] = "de.visaq.model.Sensorthing";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
