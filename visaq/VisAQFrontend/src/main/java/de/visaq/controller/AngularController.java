package de.visaq.controller;

import de.visaq.model.Sensorthing;
import de.visaq.view.VisAQ;
import def.angular.core.NgModule;
import def.angular.http.Request;
import def.angular.platform_browser.BrowserModule;
import def.dom.XMLHttpRequest;
import def.js.JSON;

/**
 * Controller that requests data from the server.
 */
@NgModule(imports = { BrowserModule.class }, declarations = { VisAQ.class }, // Appmodule root
        bootstrap = { VisAQ.class } // Appmodule root
)

public class AngularController {
    XMLHttpRequest currentRequest = new XMLHttpRequest();
    /**
     * The request to the Server is send here through an angular application. It returns a json data
     * that is parsed to a Sensorthing data
     * 
     * @param input     Input that specifies the request 
     * @return the Sensorthing used in the view
     */
    public synchronized Sensorthing sendRequest(String input, HashMap<String, Object> params) {
    	
    	currentRequest.open("POST", input, true);
    	currentRequest.onload = e -> {
    		if (currentRequest.readyState == 4 && currentRequest.status == 200) {
    		Sensorthing response = (Sensorthing) JSON
    						.parse(currentRequest.responseText);
    		String data = response.id;
    		}
    	};
    	currentRequest.send(params);
    }
}