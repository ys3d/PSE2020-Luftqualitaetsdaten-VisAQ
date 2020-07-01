package de.visaq.view.theme;

import java.awt.Color;

/**
 * Contains the Color and its Gradient that are used in the Light Mode. It is used as
 * standard configuration.
 */
public class LightTheme extends ColorTheme {

    public final Color primaryColor = null;
    public final Color secondaryColor = null;
    public final Gradient gradient = new Gradient(primaryColor, secondaryColor);
}
