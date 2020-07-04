/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
            /**
             * Constructs a new {@link Datastream}.
             *
             * @param {string} id                The identifier of the {@link Datastream} in the SensorThings
             * standard
             * @param {string} name              The name of the {@link Datastream}
             * @param {string} description       The description of the {@link Datastream}
             * @param {*} properties        Several properties given by the database
             * @param {de.visaq.model.UnitOfMeasurement} unitOfMeasurement The Unit of Measurement
             * @class
             * @extends de.visaq.model.Sensorthing
             */
            class Datastream extends de.visaq.model.Sensorthing {
                constructor(id, name, description, properties, unitOfMeasurement) {
                    super(id);
                    if (this.name === undefined)
                        this.name = null;
                    if (this.description === undefined)
                        this.description = null;
                    if (this.unitOfMeasurement === undefined)
                        this.unitOfMeasurement = null;
                    this.name = name;
                    this.description = description;
                    this.unitOfMeasurement = unitOfMeasurement;
                }
                /**
                 *
                 * @param {*} obj
                 * @return {boolean}
                 */
                equals(obj) {
                    return ((o1, o2) => { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(this, obj);
                }
            }
            model.Datastream = Datastream;
            Datastream["__class"] = "de.visaq.model.Datastream";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
