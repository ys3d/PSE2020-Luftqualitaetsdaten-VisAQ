package de.visaq.controller;

import java.util.HashMap;

import de.visaq.model.Sensorthing;
import de.visaq.view.VisAQ;
import def.angular.core.NgModule;
import def.angular.http.Request;
import def.angular.platform_browser.BrowserModule;

/**
 * Controller that requests data from the server.
 */
@NgModule(imports = { BrowserModule.class }, declarations = { VisAQ.class }, // Appmodule root
        bootstrap = { VisAQ.class } // Appmodule root
)

public class AngularController {
	private Sensorthing sensorThing = new Sensorthing();
    private Request request = new Request();
    Gson gson = new Gson();
    
    /**
     * The request to the Server is send here through an angular application. It returns a json data
     * that is parsed to a Sensorthing data
     * 
     * @param input     Input that specifies the request 
     * @return the Sensorthing used in the view
     */
    public synchronized Sensorthing sendRequest(String input, HashMap<String, Object> params) {
        request.json();
        sensorThing = gson.fromJson(request.json(), Sensorthing.class);
        return sensorThing;
    }
}