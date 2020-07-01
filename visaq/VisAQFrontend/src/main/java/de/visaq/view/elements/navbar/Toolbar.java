package de.visaq.view.elements.navbar;

import de.visaq.view.theme.ColorTheme;
import de.visaq.view.theme.DarkTheme;

/**
 * Shows the User links and definitions to the different functions and informations.
 */
public class Toolbar implements NavbarElement {

    private boolean historicalMapView = false;

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
        // TODO Auto-generated method stub
    }

    /**
     * Contains the definition for PM.
     */
    private void pmDefiniton() {
        // TODO Auto-generated method stub
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
        // TODO Auto-generated method stub
    }

    /**
     * Will later open the Timeline with historical Data on the Map.
     */
    private void historicalData() {

        this.setHistoricalMapView(true);
        // TODO Auto-generated method stub
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
