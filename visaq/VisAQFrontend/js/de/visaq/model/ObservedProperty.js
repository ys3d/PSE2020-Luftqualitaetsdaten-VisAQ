/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
            /**
             * Constructs a new {@link ObservedProperty}.
             *
             * @param {string} id          The identifier of the {@link ObservedProperty} in the SensorThings
             * standard
             * @param {string} description The description of the {@link ObservedProperty}
             * @param {string} name        The name of the {@link ObservedProperty}
             * @param {*} properties  The properties of the Observed Property
             * @param {string} definition  A URL which links to a definition of the {@link ObservedProperty}
             * @class
             * @extends de.visaq.model.Sensorthing
             */
            class ObservedProperty extends de.visaq.model.Sensorthing {
                constructor(id, description, name, properties, definition) {
                    super(id);
                    if (this.name === undefined)
                        this.name = null;
                    if (this.definition === undefined)
                        this.definition = null;
                    if (this.description === undefined)
                        this.description = null;
                    if (this.properties === undefined)
                        this.properties = null;
                    this.name = name;
                    this.definition = definition;
                    this.description = description;
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
            model.ObservedProperty = ObservedProperty;
            ObservedProperty["__class"] = "de.visaq.model.ObservedProperty";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
