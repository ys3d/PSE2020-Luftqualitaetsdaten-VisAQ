package de.visaq.view.elements.navbar;

import java.util.ArrayList;

import de.visaq.controller.AngularController;
import de.visaq.model.Sensor;

/**
 * Expert View Filter is an extension for experienced users. It is only active in Expert Mode and
 * allows the user to select specific Sensors that are then shown on the Map.
 */
public class ExpertViewFilter implements NavbarElement {

    private AngularController angularController;
    private ArrayList<Sensor> sensorTypes;
    private ArrayList<Sensor> selectedSensorTypes;

    /**
     * Shows the different Sensortypes that can be chosen.
     */
    @Override
    public void show() {
    }

    /**
     * Sets the Sensortypes that are selected.
     * 
     * @param selectedSensorTypes The Sensortypes that the User selects
     */
    private void setSelectedSensors(ArrayList<Sensor> selectedSensorTypes) {

        // TODO change the sensor types to the correct version
        this.selectedSensorTypes = selectedSensorTypes;
    }

    /**
     * Returns the selected Sensortypes.
     * 
     * @return The Instance of the selected Sensortypes
     */
    public ArrayList<Sensor> getSelectedSensors() {
        return selectedSensorTypes;
    }
}
