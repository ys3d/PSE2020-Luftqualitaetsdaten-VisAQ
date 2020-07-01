package de.visaq.controller;

import java.util.ArrayList;

import org.json.JSONObject;

import de.visaq.controller.link.MultiOnlineLink;
import de.visaq.model.sensorthings.HistoricalLocation;
import de.visaq.model.sensorthings.Location;
import de.visaq.model.sensorthings.Thing;

/**
 * Encapsulates the control over Location objects.
 */
public class LocationController extends SensorthingController<Location> {
    public static final String MAPPING = "/api/location";

    @Override
    public ArrayList<Location> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Location get(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Location singleBuild(JSONObject json) {
        json = UtilityController.removeArrayWrapper(json);

        if (json == null) {
            return null;
        }

        Location location = new Location(json.getString("@iot.id"), json.getString("@iot.selfLink"),
                false, json.getString("name"), json.getString("description"),
                UtilityController.buildLocationPoint(json),
                new MultiOnlineLink<HistoricalLocation>(
                        json.getString("HistoricalLocations@iot.navigationLink"), false),
                new MultiOnlineLink<Thing>(json.getString("Things@iot.navigationLink"), false));
        return location;
    }

}
