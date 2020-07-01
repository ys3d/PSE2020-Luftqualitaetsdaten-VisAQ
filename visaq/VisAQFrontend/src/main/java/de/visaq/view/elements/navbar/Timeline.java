package de.visaq.view.elements.navbar;

import java.time.Instant;

import de.visaq.view.VisAQ;

/**
 * The Timeline is used to show the historical data directly on the map. It also implements the
 * NavbarElement to use the show method.
 */
public class Timeline implements NavbarElement {
    
    private Instant time;
    
    @Override
    public void show() {
        // TODO Auto-generated method stub
        VisAQ.getInstance().userInput();
    }
    
    /**
     * Returns the time.
     * 
     * @return      The time
     */
    public Instant getTime() {
        return this.time;
    }
   
    /**
     * A Time Data Query occurs when the controller on the timeline is moved. The method set the
     * time of the data query.
     * 
     * @param time      The time
     */
    private void setTime(Instant time) {
        this.time = time;
    }
}