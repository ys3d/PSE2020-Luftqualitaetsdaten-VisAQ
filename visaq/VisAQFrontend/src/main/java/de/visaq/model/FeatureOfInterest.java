package de.visaq.model;

import java.util.Map;

/**
 * <p>
 * Representation of the FeatureOfIntrest entity in the Frontend.
 * </p>
 * <p>
 * An Observation results is a value being assigned to a phenomenon. The phenomenon is a property of
 * a feature, the latter being the FeatureOfInterest of the Observation
 * </p>
 * 
 * @see <a href=
 *      "https://developers.sensorup.com/docs/#featureOfInterest_post">https://developers.sensorup.com/docs/#featureOfInterest_postt</a>
 */
public class FeatureOfInterest extends Sensorthing<FeatureOfInterest> {
    public final String description;
    public final String name;
    public final Map<String, Object> features;

    /**
     * Constructs a new {@link FeatureOfInterest}.
     * 
     * @param id               The identifier of the {@link FeatureOfInterest} in the SensorThings
     *                         standard
     * @param description      The description of the {@link FeatureOfInterest}
     * @param name             The name of the {@link FeatureOfInterest}
     * @param features         Features
     */
    public FeatureOfInterest(String id, String description, String name,
            Map<String, Object> features) {
        super(id);
        this.description = description;
        this.name = name;
        this.features = features;
    }
    
    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }
}
