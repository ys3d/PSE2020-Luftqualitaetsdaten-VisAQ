package de.visaq.view.elements.navbar;

import static def.dom.Globals.document;
import static def.dom.Globals.window;

import de.visaq.view.Language;
import def.dom.Document;
import def.dom.HTMLElement;
import def.dom.HTMLIFrameElement;

/**
 * Shows the User links and definitions to the different functions and informations.
 */
public class Toolbar implements NavbarElement {

    private boolean historicalMapView = false;
    HTMLElement toolbar = document.createElement("toolbar");
    private HTMLElement diyButton = document.createElement("DIY");
    private HTMLElement pmDefButton = document.createElement("PM Definition");
    private HTMLElement causesPmButton = document.createElement("PM Causes");
    private HTMLElement smartAqButton = document.createElement("SmartAQNet");
    private HTMLElement historicalData = document.createElement("Historical Data");
    

    /**
     * Constructor for the Navbar.
     */
    public Toolbar() {
        // TODO Auto-generated method stub
    }

    /**
     * Contains the link to the DIY site.
     */
    private void diy() {
        diyButton.onclick = e -> {
            window.location.replace("https://www.smartaq.net/de/participate/");
            return e;
        };
        toolbar.appendChild(diyButton);
    }

    /**
     * Contains the definition for PM.
     */
    private void pmDefiniton() {
    	toolbar.appendChild(pmDefButton);
    }

    /**
     * Contains the causes for PM.
     */
    private void causesPM() {
        // TODO Auto-generated method stub
    }

    /**
     * Contains a link to the site of smartAQNet.
     */
    private void smartAqNet() {
        smartAqButton.onclick = e -> {
            window.location.replace("https://www.smartaq.net/en/dashboard/#/home");
            return e;
        };
        toolbar.appendChild(smartAqButton);
    }

    /**
     * Will later open the Timeline with historical Data on the Map.
     */
    private void historicalData() {

        this.setHistoricalMapView(true);
        // TODO Auto-generated method stub
        toolbar.appendChild(historicalData);
    }

    @Override
    public void show() {
          
    }

    /**
     * Return the if the Historical View is set.
     * 
     * @return The instance of Historical View
     */
    public boolean isHistoricalMapView() {
        return historicalMapView;
    }

    /**
     * Sets the Historical View.
     * 
     * @param historicalView The instance of Historical View
     */
    private void setHistoricalMapView(boolean historicalMapView) {
        this.historicalMapView = historicalMapView;
    }
}
