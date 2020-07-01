package de.visaq.view.elements.map;

import de.visaq.view.elements.airquality.AirQualityData;
import de.visaq.view.theme.Gradient;

/**
 * The class creates a Legend for a Map overlay according to the given Air Quality Data.
 *
 */
public class Legend {
    public final AirQualityData airQualityData;
    private Gradient gradient;

    /**
     * Sole constructor of the class.
     * 
     * @param airQualityData The Air Quality Data, contains the gradient
     */
    public Legend(AirQualityData airQualityData) {
        this.airQualityData = airQualityData;
        this.gradient = airQualityData.gradient;
    }
    
    /**
     * Gradient of the selected airQualityData that is shown on the Map.
     */
    public void show() {

        // TODO implement

    }

}
