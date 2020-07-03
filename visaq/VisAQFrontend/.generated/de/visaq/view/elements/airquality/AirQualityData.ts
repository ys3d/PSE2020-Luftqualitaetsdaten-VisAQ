/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.airquality {
    /**
     * Sole constructor of the class.
     * 
     * @param {string} name  The name
     * @param {java.awt.Color} primaryColor
     * @param {java.awt.Color} secondaryColor
     * @class
     */
    export abstract class AirQualityData {
        public name : string;

        public primaryColor : java.awt.Color;

        public secondaryColor : java.awt.Color;

        public gradient : de.visaq.view.theme.Gradient;

        public constructor(name : string, primaryColor : java.awt.Color, secondaryColor : java.awt.Color) {
            if(this.name===undefined) this.name = null;
            if(this.primaryColor===undefined) this.primaryColor = null;
            if(this.secondaryColor===undefined) this.secondaryColor = null;
            if(this.gradient===undefined) this.gradient = null;
            this.name = name;
            this.primaryColor = primaryColor;
            this.secondaryColor = secondaryColor;
            this.gradient = new de.visaq.view.theme.Gradient(primaryColor, secondaryColor);
        }
    }
    AirQualityData["__class"] = "de.visaq.view.elements.airquality.AirQualityData";

}

