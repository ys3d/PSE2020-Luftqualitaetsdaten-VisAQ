package de.visaq.controller;

import java.text.MessageFormat;
import java.util.ArrayList;

import org.json.JSONObject;
import org.locationtech.jts.geom.Envelope;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import de.visaq.controller.link.MultiOnlineLink;
import de.visaq.controller.link.SingleOnlineLink;
import de.visaq.model.sensorthings.Datastream;
import de.visaq.model.sensorthings.HistoricalLocation;
import de.visaq.model.sensorthings.Location;
import de.visaq.model.sensorthings.Thing;

/**
 * Encapsulates the control over Thing objects.
 */
@RestController
public class ThingController extends SensorthingController<Thing> {
    public static final String MAPPING = "/api/thing";

    @Override
    public ArrayList<Thing> getAll() {
        MultiOnlineLink<Thing> multiLink = new MultiOnlineLink<Thing>("/Things?$top=3", true);
        return multiLink.get(this);
    }

    /**
     * Retrieves the Thing objects spatially located inside the specified polygon.
     * 
     * @param envelope Covers the area of all allowed locations
     * @return An array of Thing objects that were retrieved.
     */
    public ArrayList<Thing> getAll(Envelope envelope) {
        // TODO Auto-generated method stub
        return null;
    }

    @PostMapping(MAPPING)
    @Override
    public Thing get(@RequestParam String id) {
        return (Thing) new SingleOnlineLink<Thing>(MessageFormat.format("/Things(''{0}'')", id),
                true).get(this);
    }

    @Override
    public Thing singleBuild(JSONObject json) {
        json = UtilityController.removeArrayWrapper(json);

        if (json == null) {
            return null;
        }

        Thing thing = new Thing(json.getString("@iot.id"), json.getString("@iot.selfLink"), false,
                json.getString("description"), json.getString("name"),
                UtilityController.buildProperties(json),
                new MultiOnlineLink<Datastream>(json.getString("Datastreams@iot.navigationLink"),
                        false),
                new MultiOnlineLink<HistoricalLocation>(
                        json.getString("HistoricalLocations@iot.navigationLink"), false),
                new MultiOnlineLink<Location>(json.getString("Locations@iot.navigationLink"),
                        false));
        return thing;
    }
}
