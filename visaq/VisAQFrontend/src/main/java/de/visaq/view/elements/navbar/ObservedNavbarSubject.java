package de.visaq.view.elements.navbar;

import de.visaq.view.NavbarObserver;

/**
 * Interface for Navigation Bar. Encapsulates methods to deal with Observers.
 */
public interface ObservedNavbarSubject {

    /**
     * Add a new Observer to the List of Observers.
     * 
     * @param navbarObserver The instance of the Navigation Bar Observer
     */
    public void attach(NavbarObserver navbarObserver);

    /**
     * Remove an Observer from the List of Observers.
     * 
     * @param navbarObserver The instance of the Navigation Bar Observer
     */
    public void detach(NavbarObserver navbarObserver);

    /**
     * Notify all Navigation Bar Observers in the List of Observers.
     */
    public void notifyObserver();
}
