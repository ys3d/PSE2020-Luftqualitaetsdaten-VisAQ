/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.navbar {
    /**
     * Interface for Navigation Bar. Encapsulates methods to deal with Observers.
     * @class
     */
    export interface ObservedNavbarSubject {
        /**
         * Add a new Observer to the List of Observers.
         * 
         * @param {*} navbarObserver The instance of the Navigation Bar Observer
         */
        attach(navbarObserver : de.visaq.view.NavbarObserver);

        /**
         * Remove an Observer from the List of Observers.
         * 
         * @param {*} navbarObserver The instance of the Navigation Bar Observer
         */
        detach(navbarObserver : de.visaq.view.NavbarObserver);

        /**
         * Notify all Navigation Bar Observers in the List of Observers.
         */
        notifyObserver();
    }
}

