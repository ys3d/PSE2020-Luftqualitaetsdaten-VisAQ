package de.visaq.view;

import de.visaq.view.elements.airquality.AirQualityData;
import de.visaq.view.elements.navbar.ExpertViewFilter;
import de.visaq.view.elements.navbar.SearchBar;
import def.leaflet.l.BaseIconOptions;
import def.leaflet.l.Icon;

/**
 * InformationView creates the view using a helping overlay allowing the user to easier navigate
 * through the website. TODO
 */
public class InformationView extends View {

    private Icon<BaseIconOptions> icon = null;

    @Override
    public void show() {
        // TODO Auto-generated method stub

    }

    /**
     * Returns the icon.
     * 
     * @return The icon
     */
    public Icon<BaseIconOptions> getIcon() {
        return icon;
    }

    /**
     * Setter for the icon.
     * 
     * @param icon  The icon
     */
    public void setIcon(Icon<BaseIconOptions> icon) {
        this.icon = icon;
    }

    @Override
    public void update(SearchBar searchbar, AirQualityData currentAirQualityData,
            boolean expertView, ExpertViewFilter expertViewFilter, boolean historicalView) {
        // TODO Auto-generated method stub

    }
}
