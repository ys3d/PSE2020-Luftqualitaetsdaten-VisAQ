package de.visaq.view.elements.diagram;

import java.time.Instant;

import de.visaq.model.Observation;
import de.visaq.view.elements.airquality.AirQualityData;

/**
 * Produces a Line Diagram with the given data. The Line Diagram show the historical development of
 * the current Air Quality Data. The timeframe is hereby set by the user or has a default value.
 */
public class LineDiagram implements Diagram {

    public final Observation[] observations;
    public final AirQualityData airQualityData;
    public final Instant start;
    public final Instant end;

    /**
     * Sole Constructor of the class Line Diagram.
     * 
     * @param observations   The instance of the Observations
     * @param airQualityData The current Air Quality Data
     * @param start          The start point of the historical development
     * @param end            The end point of the historical development
     */
    public LineDiagram(Observation[] observations, AirQualityData airQualityData, Instant start,
            Instant end) {
        this.observations = observations;
        this.airQualityData = airQualityData;
        this.start = start;
        this.end = end;
    }

    @Override
    public void drawDiagram() {

    }

    @Override
    public void showDiagram() {
        // TODO Auto-generated method stub

    }
}
