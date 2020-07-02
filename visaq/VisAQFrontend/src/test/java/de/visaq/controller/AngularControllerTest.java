package de.visaq.controller;

import java.time.Instant;
import java.util.HashMap;

import org.junit.jupiter.api.Test;

import de.visaq.model.Datastream;
import de.visaq.model.HistoricalLocation;
import de.visaq.model.Sensorthing;

class AngularControllerTest {

    @Test
    Sensorthing testAngular() {
        AngularController angular = new AngularController();
        HashMap<String, Object> hash = new HashMap<String, Object>();
        String key = "saqn:t:grimm-aerosol.com:EDM80NEPH:SN17017";
        Instant time = null;
        time = Instant.parse("2020-04-24T06:21:34.040Z");
        Sensorthing<Datastream> thing = new HistoricalLocation(key, time);
        hash.put(key, thing);
        return angular.sendRequest("/api/thing", hash);
    }

}