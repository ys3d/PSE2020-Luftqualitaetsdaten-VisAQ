/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.controller {
    export class AngularControllerTest {
        static params : any; public static params_$LI$() : any { if(AngularControllerTest.params == null) AngularControllerTest.params = <any>({}); return AngularControllerTest.params; };

        /*private*/ input : string = null;

        static sensorthing : de.visaq.model.HistoricalLocation; public static sensorthing_$LI$() : de.visaq.model.HistoricalLocation { if(AngularControllerTest.sensorthing == null) AngularControllerTest.sensorthing = new de.visaq.model.HistoricalLocation("d848b564-85f3-11ea-9ba9-b38f82584044", java.time.Instant.parse("2020-04-24T06:21:34.040Z")); return AngularControllerTest.sensorthing; };

        static setUpBeforeClass() {
            let input : string = "saqn:t:grimm-aerosol.com:EDM80NEPH:SN17017";
            /* put */(AngularControllerTest.params_$LI$()["saqn:t:grimm-aerosol.com:EDM80NEPH:SN17017"] = AngularControllerTest.sensorthing_$LI$());
        }

        test() {
            let controller : de.visaq.controller.AngularController = new de.visaq.controller.AngularController();
            let test : de.visaq.model.Sensorthing<any> = controller.sendRequest(this.input, AngularControllerTest.params_$LI$());
            org.junit.jupiter.api.Assertions.assertEquals(AngularControllerTest.sensorthing_$LI$().id, test.id);
        }
    }
    AngularControllerTest["__class"] = "de.visaq.controller.AngularControllerTest";

}


de.visaq.controller.AngularControllerTest.sensorthing_$LI$();

de.visaq.controller.AngularControllerTest.params_$LI$();
