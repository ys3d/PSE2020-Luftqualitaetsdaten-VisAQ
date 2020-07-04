/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var model;
        (function (model) {
            /**
             * Constructs a new {@link UnitOfMeasurement}.
             *
             * @param {string} name       The name of the {@link UnitOfMeasurement}
             * @param {string} symbol     The symbol of the {@link UnitOfMeasurement}
             * @param {string} definition The definition of the {@link UnitOfMeasurement}
             * @class
             */
            class UnitOfMeasurement {
                constructor(name, symbol, definition) {
                    if (this.symbol === undefined)
                        this.symbol = null;
                    if (this.name === undefined)
                        this.name = null;
                    if (this.definition === undefined)
                        this.definition = null;
                    this.name = name;
                    this.symbol = symbol;
                    this.definition = definition;
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
            model.UnitOfMeasurement = UnitOfMeasurement;
            UnitOfMeasurement["__class"] = "de.visaq.model.UnitOfMeasurement";
        })(model = visaq.model || (visaq.model = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
