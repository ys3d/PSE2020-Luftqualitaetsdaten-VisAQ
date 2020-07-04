/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
            /**
             * Constructs a new {@link HistoricalLocation}.
             *
             * @param {string} id   The identifier of the {@link  HistoricalLocation} in the SensorThings standard
             * @param {java.time.Instant} time The time
             * @class
             * @extends de.visaq.model.Sensorthing
             */
            class HistoricalLocation extends de.visaq.model.Sensorthing {
                constructor(id, time) {
                    super(id);
                    if (this.time === undefined)
                        this.time = null;
                    this.time = time;
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
            model.HistoricalLocation = HistoricalLocation;
            HistoricalLocation["__class"] = "de.visaq.model.HistoricalLocation";
            HistoricalLocation["__interfaces"] = ["de.visaq.model.SensorthingTimeStamp"];
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
