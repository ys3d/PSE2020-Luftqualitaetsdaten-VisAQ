/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var theme;
            (function (theme) {
                /**
                 * Constructs a ColorRange using the two given colors.
                 *
                 * @param {java.awt.Color} first  The first Color
                 * @param {java.awt.Color} second The second Color
                 * @class
                 */
                class Gradient {
                    constructor(first, second) {
                        if (this.first === undefined)
                            this.first = null;
                        if (this.second === undefined)
                            this.second = null;
                        this.first = first;
                        this.second = second;
                    }
                    /**
                     * Returns a color that is at * 100 percent between the color first and second by linear
                     * interpolation in HSV color space.
                     *
                     * @param {number} at A value in [0,1]
                     * @return {java.awt.Color} The Color
                     */
                    get(at) {
                        let min = [0, 0, 0];
                        java.awt.Color.RGBtoHSB(this.first.getRed(), this.first.getGreen(), this.first.getBlue(), min);
                        let max = [0, 0, 0];
                        java.awt.Color.RGBtoHSB(this.second.getRed(), this.second.getGreen(), this.second.getBlue(), max);
                        let linearInterpolated = [0, 0, 0];
                        for (let i = 0; i < 3; i++) {
                            {
                                linearInterpolated[i] = Math.fround(Math.fround(at * max[i]) + Math.fround((Math.fround(1.0 - at)) * min[i]));
                            }
                            ;
                        }
                        return new java.awt.Color(java.awt.Color.HSBtoRGB(linearInterpolated[0], linearInterpolated[1], linearInterpolated[2]));
                    }
                }
                theme.Gradient = Gradient;
                Gradient["__class"] = "de.visaq.view.theme.Gradient";
            })(theme = view.theme || (view.theme = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
