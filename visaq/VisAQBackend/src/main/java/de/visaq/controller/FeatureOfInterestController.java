package de.visaq.controller;

import java.awt.Point;
import java.util.ArrayList;

import org.json.JSONException;
import org.json.JSONObject;

import de.visaq.controller.link.MultiOnlineLink;
import de.visaq.model.sensorthings.FeatureOfInterest;
import de.visaq.model.sensorthings.Observation;

/**
 * Encapsulates the control over FeatureOfIntrest objects.
 */
public class FeatureOfInterestController extends SensorthingController<FeatureOfInterest> {
    public static final String MAPPING = "/api/featureOfInterest";

    @Override
    public ArrayList<FeatureOfInterest> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public FeatureOfInterest get(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    /**
     * Tries to get the location as a point from a FeatureOfInterest entity's features.
     * 
     * @param foi The FeatureOfInterest entity
     * @return The Point that was retrieved from the features or null if the features do not contain
     *         a point.
     */
    public Point getLocationPoint(FeatureOfInterest foi) {
        try {
            JSONObject json = new JSONObject(foi.features);
            return UtilityController.buildLocationPoint(json);
        } catch (JSONException | NullPointerException e) {
            return null;
        }
    }

    @Override
    public FeatureOfInterest singleBuild(JSONObject json) {
        try {
            json = UtilityController.removeArrayWrapper(json);

            if (json == null) {
                return null;
            }

            FeatureOfInterest featureOfIntrest = new FeatureOfInterest(json.getString("@iot.id"),
                    json.getString("@iot.selfLink"), false, json.getString("description"),
                    json.getString("name"),
                    new MultiOnlineLink<Observation>(
                            json.getString("Observations@iot.navigationLink"), false),
                    json.getJSONObject("feature").toMap());
            return featureOfIntrest;
        } catch (JSONException e) {
            return null;
        }
    }

}
