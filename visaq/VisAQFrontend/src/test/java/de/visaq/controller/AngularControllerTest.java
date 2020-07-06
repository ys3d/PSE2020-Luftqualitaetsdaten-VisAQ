package de.visaq.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Instant;
import java.util.HashMap;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import de.visaq.model.HistoricalLocation;
import de.visaq.model.Sensorthing;

class AngularControllerTest {

    private static HashMap<String, Object> params = new HashMap<String, Object>();
    private String input = null;
    private static HistoricalLocation sensorthing = new HistoricalLocation(
            "d848b564-85f3-11ea-9ba9-b38f82584044", Instant.parse("2020-04-24T06:21:34.040Z"));

    @BeforeAll
        static void setUpBeforeClass() throws Exception {
        String input = "saqn:t:grimm-aerosol.com:EDM80NEPH:SN17017";
        params.put("saqn:t:grimm-aerosol.com:EDM80NEPH:SN17017", sensorthing);
    }

    @Test
    void test() {
        AngularController controller = new AngularController();
        Sensorthing test = controller.sendRequest(input, params);
        assertEquals(sensorthing.id, test.id);
    }

}
