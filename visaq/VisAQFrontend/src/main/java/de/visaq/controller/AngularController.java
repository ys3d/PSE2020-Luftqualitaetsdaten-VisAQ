package de.visaq.controller;

import static def.dom.Globals.console;
import static def.dom.Globals.document;

import java.util.HashMap;

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

public class AngularController {
    Sensorthing sensorThing;
    XMLHttpRequest currentRequest = new XMLHttpRequest();
    
    /**
     * The request to the Server is send here through an angular application. It returns a json data
     * that is parsed to a Sensorthing data
     * 
     * @param input     Input that specifies the request 
     * @param params    Params of the given Object
     * @return the Sensorthing used in the view
     */
    
    public synchronized Sensorthing sendRequest(String input, HashMap<String, Object> params) {
        currentRequest.open("POST", "https://visaq.de/api/thing", true);
        currentRequest.onreadystatechange = e -> {
            if (currentRequest.readyState == 4 && currentRequest.status == 200) {
                console.log(currentRequest.responseText);
            }
            return e;
        };
        currentRequest.onload = e -> {
            sensorThing = (Sensorthing) JSON
                      .parse(currentRequest.responseText);
            return e;
        };
        currentRequest.send(params);
        return sensorThing;
    }
}