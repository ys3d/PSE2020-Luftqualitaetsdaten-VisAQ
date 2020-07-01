package de.visaq.view.theme;

/**
 * Abstranct class that encapsulates the methods for Color Themes.
 */
public abstract class ColorTheme {
    private static ColorTheme instance = new LightTheme();

    /**
     * Creates a ColorTheme instance and updates the global instance accordingly.
     */
    public ColorTheme() {
        setInstance(this);
    }

    /**
     * Gets the current ColorTheme instance.
     * 
     * @return The ColorTheme instance
     */
    public static synchronized ColorTheme getInstance() {
        ColorTheme.instance = ColorTheme.instance == null ? new LightTheme() : ColorTheme.instance;
        return ColorTheme.instance;
    }

    /**
     * Sets the current ColorTheme instance.
     * 
     * @param colorTheme The ColorTheme instance
     */
    public static synchronized void setInstance(ColorTheme colorTheme) {
        ColorTheme.instance = colorTheme;
    }
}