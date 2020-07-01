package de.visaq.controller;

import java.util.ArrayList;

import org.json.JSONObject;

import de.visaq.controller.link.MultiOnlineLink;
import de.visaq.model.sensorthings.Datastream;
import de.visaq.model.sensorthings.ObservedProperty;

/**
 * Encapsulates the control over ObservedProperty objects.
 */
public class ObservedPropertyController extends SensorthingController<ObservedProperty> {
    @Override
    public ArrayList<ObservedProperty> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    /**
     * Retrieves the ObservedProperty entity associated with the given Datastream entity.
     * 
     * @param datastream The Datastream entity
     * @return The ObservedProperty
     */
    public ObservedProperty get(Datastream datastream) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ObservedProperty get(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ObservedProperty singleBuild(JSONObject json) {
        json = UtilityController.removeArrayWrapper(json);

        if (json == null) {
            return null;
        }

        ObservedProperty observedProperty = new ObservedProperty(json.getString("@iot.id"),
                json.getString("@iot.selfLink"), false, json.getString("description"),
                json.getString("name"), UtilityController.buildProperties(json),
                json.getString("definition"), new MultiOnlineLink<Datastream>(
                        json.getString("Datastreams@iot.navigationLink"), false));
        return observedProperty;
    }
}
