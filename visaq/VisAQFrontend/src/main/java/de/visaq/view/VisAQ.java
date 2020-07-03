package de.visaq.view;

import java.util.ArrayList;

import de.visaq.view.elements.CookieNotice;
import de.visaq.view.elements.airquality.AirQualityData;
import de.visaq.view.elements.navbar.Navbar;
import jsweet.dom.HTMLElement;
import static jsweet.dom.Globals.*;

/**
 * Main class of the Frontend.
 */
public class VisAQ {
	private AirQualityData[] airQualityData;
    private static VisAQ instance = new VisAQ();
   
    /**
     * Gets the current Language instance.
     * 
     * @return The Language instance.
     */
    public static synchronized VisAQ getInstance() {
        VisAQ.instance = VisAQ.instance == null ? new VisAQ()
                : VisAQ.instance;
        return VisAQ.instance;
    }

    /**
     * Sets the current VisAQ instance.
     * 
     * @param visAQ     The VisAQ instance.
     */
    public static synchronized void setInstance(VisAQ visAQ) {
        VisAQ.instance = visAQ;
    }
    
    private ArrayList<View> view = null;
    private Navbar navbar;

    /**
     * Main method of the Frontend.
     * 
     * @param args Input
     */
    public static void main(String[] args) {
    	
    	alert("This example writes 'Hello world' in the document!");
    	System.out.println("Starting VisAQ.js example");
		HTMLElement e = document.getElementById("target");
		e.innerHTML = "Hello world!";
        
		
		
		setInstance(new VisAQ()); 
        CookieNotice cookieNotice = new CookieNotice();
        cookieNotice.popup();
        
        AirQualityData airQualityData1;
    }
   
    /**
     * Notifies the Navbar about a user input.
     */
    public void userInput() {
        navbar.notifyObserver();
        navbar.show();
        navbar.showView();        
    }
}
