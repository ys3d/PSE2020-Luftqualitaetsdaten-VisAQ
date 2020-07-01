package de.visaq.view;

import de.visaq.view.elements.airquality.AirQualityData;
import de.visaq.view.elements.navbar.ExpertViewFilter;
import de.visaq.view.elements.navbar.SearchBar;

/**
 * Interface for all Navbar Observers.
 */
public interface NavbarObserver {
    /**
     * Method to update with the instances of the Navbar class.
     * 
     * @param searchbar             The searchbar instance
     * @param currentAirQualityData The instance of the current Air Quality Data
     * @param expertView            Boolean, the instance of the Expert View
     * @param expertViewFilter      The instance of the Expert View Filter
     * @param historicalView        The instance of the Historical View
     */
    public void update(SearchBar searchbar, AirQualityData currentAirQualityData,
            boolean expertView, ExpertViewFilter expertViewFilter, boolean historicalView);
}
