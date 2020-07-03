package de.visaq.controller;

import java.util.ArrayList;

import org.json.JSONObject;

import de.visaq.controller.link.MultiNavigationLink;
import de.visaq.controller.link.SingleNavigationLink;
import de.visaq.model.sensorthings.HistoricalLocation;
import de.visaq.model.sensorthings.Location;
import de.visaq.model.sensorthings.Thing;

/**
 * Encapsulates the control over HistoricalLocation objects.
 */
public class HistoricalLocationController extends SensorthingController<HistoricalLocation> {
    public static final String MAPPING = "/api/historicalLocation";

    @Override
    public ArrayList<HistoricalLocation> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public HistoricalLocation get(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public HistoricalLocation singleBuild(JSONObject json) {
        json = UtilityController.removeArrayWrapper(json);

        if (json == null) {
            return null;
        }

        SingleNavigationLink<Thing> thing = new SingleNavigationLink.Builder<Thing>()
                .build("Thing@iot.navigationLink", "Thing", new ThingController(), json);
        MultiNavigationLink<Location> locations = new MultiNavigationLink.Builder<Location>()
                .build("Locations@iot.navigationLink", "Locations", new LocationController(), json);

        HistoricalLocation historicalLocation =
                new HistoricalLocation(json.getString("@iot.id"), json.getString("@iot.selfLink"),
                        false, UtilityController.buildTime(json, "time"), thing, locations);
        return historicalLocation;
    }

}
