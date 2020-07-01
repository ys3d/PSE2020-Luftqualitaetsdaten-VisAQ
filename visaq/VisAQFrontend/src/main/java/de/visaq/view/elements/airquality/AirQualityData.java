
package de.visaq.view.elements.airquality;

import java.awt.Color;

import de.visaq.view.theme.Gradient;

/**
 * Object used for creating the shown colors for the different Legends and Interpolation Views.
 */
public abstract class AirQualityData {

    public final String name;
    public final Color primaryColor;
    public final Color secondaryColor;
    public final Gradient gradient;
    
    /**
     * Sole constructor of the class.
     * 
     * @param name              The name
     * @param primaryColor      The primary Color
     * @param secondaryColor    The secondary Color
     */
    public AirQualityData(String name, Color primaryColor, Color secondaryColor)  {
        this.name = name;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.gradient = new Gradient(primaryColor, secondaryColor);    
    }
}
