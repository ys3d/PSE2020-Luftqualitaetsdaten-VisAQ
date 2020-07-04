/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
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
            class Location extends de.visaq.model.Sensorthing {
                constructor(id, name, description, location) {
                    super(id);
                    if (this.name === undefined)
                        this.name = null;
                    if (this.description === undefined)
                        this.description = null;
                    if (this.location === undefined)
                        this.location = null;
                    this.name = name;
                    this.description = description;
                    this.location = location;
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
            model.Location = Location;
            Location["__class"] = "de.visaq.model.Location";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
