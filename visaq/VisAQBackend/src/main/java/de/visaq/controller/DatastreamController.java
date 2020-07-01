package de.visaq.controller;

import java.text.MessageFormat;
import java.util.ArrayList;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import de.visaq.controller.link.MultiOnlineLink;
import de.visaq.controller.link.SingleOnlineLink;
import de.visaq.model.sensorthings.Datastream;
import de.visaq.model.sensorthings.Observation;
import de.visaq.model.sensorthings.ObservedProperty;
import de.visaq.model.sensorthings.Sensor;
import de.visaq.model.sensorthings.Thing;

/**
 * Encapsulates the control over Datastream objects.
 */
@RestController
public class DatastreamController extends SensorthingController<Datastream> {
    public static final String MAPPING = "/api/datastream";

    @Override
    public ArrayList<Datastream> getAll() {
        return new MultiOnlineLink<Datastream>("/Datastreams", true).get(this);
    }

    /**
     * Retrieves all Datastream objects of the specified Thing.
     * 
     * @param thing Thing the Datastream objects are associated with.
     * @return An array of Datastream objects that were retrieved.
     */
    @PostMapping(MAPPING)
    public ArrayList<Datastream> get(@RequestParam Thing thing) {
        return thing.datastreamsLink.get(this);
    }

    /**
     * Retrieves all Datastream objects of the specified Sensor.
     * 
     * @param sensor Sensor the Datastream objects are associated with.
     * @return An array of Datastream objects that were retrieved.
     */
    @PostMapping(MAPPING)
    public ArrayList<Datastream> get(@RequestParam Sensor sensor) {
        return sensor.datastreamsLink.get(this);
    }

    /**
     * Retrieves the Datastream object for the observed property of the specified Thing.
     * 
     * @param thing            Thing the Datastream is associated with.
     * @param observedProperty Observed Property the Datastream is associated with.
     * @return The Datastream object that was retrieved.
     */
    @PostMapping(MAPPING)
    public Datastream get(@RequestParam Thing thing,
            @RequestParam ObservedProperty observedProperty) {
        return (Datastream) new SingleOnlineLink<Datastream>(MessageFormat.format(
                "/Things(''{0}'')/Datastreams?$filter=ObservedProperty/@iot.id eq ''{1}''",
                thing.id, observedProperty.id), true).get(this);
    }

    /**
     * Retrieves the Datastream object for the observed property of the specified Sensor.
     * 
     * @param sensor           Sensor the Datastream is associated with.
     * @param observedProperty Observed Property the Datastream is associated with.
     * @return The Datastream object that was retrieved.
     */
    @GetMapping(MAPPING)
    public Datastream get(@RequestParam Sensor sensor,
            @RequestParam ObservedProperty observedProperty) {
        return (Datastream) new SingleOnlineLink<Datastream>(MessageFormat.format(
                "/Sensors(''{0}'')/Datastreams?$filter=ObservedProperty/@iot.id eq ''{1}''",
                sensor.id, observedProperty.id), true).get(this);
    }

    @PostMapping(MAPPING)
    @Override
    public Datastream get(@RequestParam String id) {
        return (Datastream) new SingleOnlineLink<Datastream>(
                MessageFormat.format("/Datastreams(''{0}'')", id), true).get(this);
    }

    @Override
    public Datastream singleBuild(JSONObject json) {
        json = UtilityController.removeArrayWrapper(json);

        if (json == null) {
            return null;
        }

        Datastream datastream = new Datastream(json.getString("@iot.id"),
                json.getString("@iot.selfLink"), false, json.getString("name"),
                json.getString("description"), UtilityController.buildProperties(json),
                json.getString("observationType"),
                new SingleOnlineLink<Sensor>(json.getString("Sensor@iot.navigationLink"), false),
                new SingleOnlineLink<Thing>(json.getString("Thing@iot.navigationLink"), false),
                new MultiOnlineLink<Observation>(json.getString("Observations@iot.navigationLink"),
                        false),
                UtilityController.buildUnitOfMeasurement(json.getJSONObject("unitOfMeasurement")),
                new SingleOnlineLink<ObservedProperty>(
                        json.getString("ObservedProperty@iot.navigationLink"), false));
        return datastream;
    }
}
