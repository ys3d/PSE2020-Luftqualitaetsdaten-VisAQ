package de.visaq.controller;

import java.util.HashMap;

import com.google.gson.Gson;

import de.visaq.model.Sensorthing;
import de.visaq.view.VisAQ;
import def.angular.core.NgModule;
import def.angular.http.Http;
import def.angular.http.RequestOptions;
import def.angular.http.Response;
import def.angular.platform_browser.BrowserModule;
import def.dom.EventListener;
import def.dom.XMLHttpRequest;
import def.rxjs.rxjs.Observable;
import jsweet.lang.Function;
import jsweet.lang.JSON;
import def.angular.*;


/**
 * Controller that requests data from the server.
 */
@NgModule(imports = { BrowserModule.class, RequestOptions.class}, 
        declarations = { VisAQ.class }, // Appmodule root
        bootstrap = { VisAQ.class } // Appmodule root
)

public class AngularController {
    private Sensorthing sensorThing;
    Gson gson = new Gson();
    Http http = new Http();
    String savedJson;
    XMLHttpRequest xml = new XMLHttpRequest();
    /**
     * The request to the Server is send here through an angular application. It returns a json data
     * that is parsed to a Sensorthing data
     * 
     * @param input     Input that specifies the request 
     * @param params    Params given to the backend
     * @return the Sensorthing used in the view
     */
    public synchronized Sensorthing sendRequest(String input, HashMap<String, Object> params) {
    	
    	xml.open("POST", "https://visaq.de", true);
    	xml.setRequestHeader("Sensorthing", input);
    	xml.send(JSON.stringify(params));
		return sensorThing;
    }
}