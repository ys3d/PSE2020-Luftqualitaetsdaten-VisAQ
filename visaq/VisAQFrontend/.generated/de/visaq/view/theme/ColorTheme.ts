/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.theme {
    /**
     * Creates a ColorTheme instance and updates the global instance accordingly.
     * @class
     */
    export abstract class ColorTheme {
        static instance : ColorTheme; public static instance_$LI$() : ColorTheme { if(ColorTheme.instance == null) ColorTheme.instance = new de.visaq.view.theme.LightTheme(); return ColorTheme.instance; };

        public constructor() {
            ColorTheme.setInstance(this);
        }

        /**
         * Gets the current ColorTheme instance.
         * 
         * @return {de.visaq.view.theme.ColorTheme} The ColorTheme instance
         */
        public static getInstance() : ColorTheme {
            ColorTheme.instance = ColorTheme.instance == null?new de.visaq.view.theme.LightTheme():ColorTheme.instance;
            return ColorTheme.instance_$LI$();
        }

        /**
         * Sets the current ColorTheme instance.
         * 
         * @param {de.visaq.view.theme.ColorTheme} colorTheme The ColorTheme instance
         */
        public static setInstance(colorTheme : ColorTheme) {
            ColorTheme.instance = colorTheme;
        }
    }
    ColorTheme["__class"] = "de.visaq.view.theme.ColorTheme";

}


de.visaq.view.theme.ColorTheme.instance_$LI$();
