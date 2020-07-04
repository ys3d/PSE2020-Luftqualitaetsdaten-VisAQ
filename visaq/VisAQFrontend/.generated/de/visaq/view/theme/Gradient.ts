/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.theme {
    /**
     * Constructs a ColorRange using the two given colors.
     * 
     * @param {java.awt.Color} first  The first Color
     * @param {java.awt.Color} second The second Color
     * @class
     */
    export class Gradient {
        public first : java.awt.Color;

        public second : java.awt.Color;

        public constructor(first : java.awt.Color, second : java.awt.Color) {
            if(this.first===undefined) this.first = null;
            if(this.second===undefined) this.second = null;
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
        public get(at : number) : java.awt.Color {
            let min : number[] = [0, 0, 0];
            java.awt.Color.RGBtoHSB(this.first.getRed(), this.first.getGreen(), this.first.getBlue(), min);
            let max : number[] = [0, 0, 0];
            java.awt.Color.RGBtoHSB(this.second.getRed(), this.second.getGreen(), this.second.getBlue(), max);
            let linearInterpolated : number[] = [0, 0, 0];
            for(let i : number = 0; i < 3; i++) {{
                linearInterpolated[i] = (<any>Math).fround((<any>Math).fround(at * max[i]) + (<any>Math).fround(((<any>Math).fround(1.0 - at)) * min[i]));
            };}
            return new java.awt.Color(java.awt.Color.HSBtoRGB(linearInterpolated[0], linearInterpolated[1], linearInterpolated[2]));
        }
    }
    Gradient["__class"] = "de.visaq.view.theme.Gradient";

}

