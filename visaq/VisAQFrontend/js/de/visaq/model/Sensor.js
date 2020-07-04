/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
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
            class Sensor extends de.visaq.model.Sensorthing {
                constructor(id, description, name, properties) {
                    super(id);
                    if (this.description === undefined)
                        this.description = null;
                    if (this.name === undefined)
                        this.name = null;
                    if (this.properties === undefined)
                        this.properties = null;
                    this.description = description;
                    this.name = name;
                    this.properties = properties;
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
            model.Sensor = Sensor;
            Sensor["__class"] = "de.visaq.model.Sensor";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
