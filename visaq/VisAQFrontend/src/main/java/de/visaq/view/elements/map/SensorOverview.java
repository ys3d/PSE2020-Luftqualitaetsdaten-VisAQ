package de.visaq.view.elements.map;

import java.time.Instant;

import org.json.JSONObject;

import de.visaq.controller.AngularController;
import de.visaq.model.Observation;
import de.visaq.model.Sensor;
import de.visaq.view.elements.airquality.AirQualityData;
import de.visaq.view.elements.diagram.Diagram;
import de.visaq.view.elements.diagram.LineDiagram;

/**
 * Sensor Overview (also referred to as Sidebar) is used to show interpolated Point Data on the Map
 * or Data of a specific Sensor. It can show various Diagrams and different types of Air Quality
 * Data. It also provides an assessment of the danger due to specific types of pollution.
 */

public class SensorOverview {

    public final AirQualityData[] airQualityData;
    private AirQualityData currentAirQualityData;
    private Diagram diagram;
    private Instant start = null;
    private Instant end = null;
    private AngularController angularController;
    private Observation[] observations;

    /**
     * Constructor for Sensor Overview. It is used when a point on the map is marked. The Sensor
     * Overview is than initialized with the coordinates and the interpolated data of that point.
     * 
     * @param airQualityData        The Air Quality Data
     * @param coordinates           The coordinates of the point
     * @param currentAirQualityData The currentAirQualityData
     * @param time                  The Instance of the time
     */
    public SensorOverview(AirQualityData[] airQualityData, JSONObject coordinates, 
            AirQualityData currentAirQualityData, Instant time) {
        this.airQualityData = airQualityData;
        this.currentAirQualityData = currentAirQualityData;
        this.diagram = new LineDiagram(observations, currentAirQualityData, start, end);
    }

    /**
     * Constructor for Sensor Overview. It is used when a sensor on the map is marked. The Sensor
     * Overview is than initialized with the sensor and its data.
     * 
     * @param airQualityData        The Air Quality Data
     * @param sensor                The sensor
     * @param currentAirQualityData The currentAirQualityData
     * @param time                  The instance of the time
     */
    public SensorOverview(AirQualityData[] airQualityData, Sensor sensor, 
            AirQualityData currentAirQualityData, Instant time) {
        this.airQualityData = airQualityData;
        this.currentAirQualityData = currentAirQualityData;
        this.diagram = new LineDiagram(observations, currentAirQualityData, start, end);
    }
    
    /**
     * Shows the Sensor Overview.
     */
    public void show() {
        diagram.drawDiagram();
        diagram.showDiagram();
        // Query for sensordata concerning the four datatypes
    }

    /**
     * Method to change the timeframe of the diagram.
     * 
     * @param start Is the instance of the start point
     * @param end   Is the instance of the end point
     */
    public void selectTimeframe(Instant start, Instant end) {
        this.diagram = new LineDiagram(observations, currentAirQualityData, start, end);
    }

}
