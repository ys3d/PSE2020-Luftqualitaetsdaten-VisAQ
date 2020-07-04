/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.theme {
    /**
     * Contains the Color and its Gradient that are used in the Light Mode. It is used as
     * standard configuration.
     * @class
     * @extends de.visaq.view.theme.ColorTheme
     */
    export class LightTheme extends de.visaq.view.theme.ColorTheme {
        public primaryColor : java.awt.Color = null;

        public secondaryColor : java.awt.Color = null;

        public gradient : de.visaq.view.theme.Gradient = new de.visaq.view.theme.Gradient(this.primaryColor, this.secondaryColor);
    }
    LightTheme["__class"] = "de.visaq.view.theme.LightTheme";

}

