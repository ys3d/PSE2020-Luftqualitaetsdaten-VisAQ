package de.visaq.view;

/**
 * Shows what the User is seeing and adapts to different Languages and ColorThemes.
 */
public abstract class View implements NavbarObserver {

    /**
     * Shows the different instances in the View.
     */
    public abstract void show();
}
