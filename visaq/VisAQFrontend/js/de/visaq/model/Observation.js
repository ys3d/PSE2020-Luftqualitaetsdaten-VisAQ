/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
            /**
             * Constructs a new {@link Observation}.
             *
             * @param {string} id             The identifier of the {@link FeatureOfInterest} in the SensorThings
             * standard
             * @param {java.time.Instant} phenomenonTime The time when the Observation occurred
             * @param {number} result         The result of the {@link Observation}
             * @param {java.time.Instant} resultTime     The Time of the measuring result
             * @class
             * @extends de.visaq.model.Sensorthing
             */
            class Observation extends de.visaq.model.Sensorthing {
                constructor(id, phenomenonTime, result, resultTime) {
                    super(id);
                    if (this.phenomenonTime === undefined)
                        this.phenomenonTime = null;
                    if (this.result === undefined)
                        this.result = null;
                    if (this.resultTime === undefined)
                        this.resultTime = null;
                    this.phenomenonTime = phenomenonTime;
                    this.result = result;
                    this.resultTime = resultTime;
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
                /**
                 * {@inheritDoc}
                 * @param {*} other
                 * @return {boolean}
                 */
                isOlder(other) {
                    return false;
                }
                /**
                 * {@inheritDoc}
                 * @param {*} other
                 * @return {boolean}
                 */
                isNewer(other) {
                    return false;
                }
                /**
                 * {@inheritDoc}
                 * @param {*} other
                 * @return {boolean}
                 */
                isEqualOld(other) {
                    return false;
                }
                /**
                 * {@inheritDoc}
                 * @return {java.time.Instant}
                 */
                getTimeStamp() {
                    return null;
                }
            }
            model.Observation = Observation;
            Observation["__class"] = "de.visaq.model.Observation";
            Observation["__interfaces"] = ["de.visaq.model.SensorthingTimeStamp"];
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
