/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
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
            class FeatureOfInterest extends de.visaq.model.Sensorthing {
                constructor(id, description, name, features) {
                    super(id);
                    if (this.description === undefined)
                        this.description = null;
                    if (this.name === undefined)
                        this.name = null;
                    if (this.features === undefined)
                        this.features = null;
                    this.description = description;
                    this.name = name;
                    this.features = features;
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
            model.FeatureOfInterest = FeatureOfInterest;
            FeatureOfInterest["__class"] = "de.visaq.model.FeatureOfInterest";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
