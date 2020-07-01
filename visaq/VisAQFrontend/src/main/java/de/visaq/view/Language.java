package de.visaq.view;

import java.util.Properties;

import def.leaflet.l.BaseIconOptions;
import def.leaflet.l.Icon;

/**
 * Language class is used to change the Language the user prefers and sets the Icon used in the
 * Toolbar.
 */
public class Language {
    private static Language instance = new Language(null, null);

    /**
     * Gets the current Language instance.
     * 
     * @return The Language instance.
     */
    public static synchronized Language getInstance() {
        Language.instance = Language.instance == null ? new Language(null, null)
                : Language.instance;
        return Language.instance;
    }

    /**
     * Sets the current Language instance.
     * 
     * @param language The Language instance.
     */
    public static synchronized void setInstance(Language language) {
        Language.instance = language;
    }

    private Icon<BaseIconOptions> icon = null;
    private final Properties language;
    public final String name;

    /**
     * Constructor used to create the language with the given name and updates the global instance
     * accordingly.
     * 
     * @param language      The language
     * @param name          The name
     */
    public Language(Properties language, String name) {
        super();
        this.language = language;
        this.name = name;
    }

    /**
     * Gets the icon.
     * 
     * @return The icon
     */
    public Icon<BaseIconOptions> getIcon() {

        return icon;
    }

    /**
     * Sets the icon.
     * 
     * @param icon The icon
     */
    public void setIcon(Icon<BaseIconOptions> icon) {
        this.icon = icon;
    }

    /**
     * Gets the localized version of the Properties key.
     * 
     * @param key The Properties key
     * @return Localized text
     */
    public String getText(String key) {
        return null;
    }

    /**
     * Used to access the language properties.
     * 
     * @return the used language file
     */
    public Properties getLanguage() {
        return language;
    }
}
