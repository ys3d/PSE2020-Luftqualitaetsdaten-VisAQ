package de.visaq.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Reads language from file. An provides interface to the language content.
 */
public class LanguageGetter {
    private static final String NEW_LINE_REGEX = "\\r?\\n";
    private static final String SEPERATOR = "#";
    
    private final Map<String, String> language;
    public final String languageName;
    
    /**
     * Initializes a new {@link LanguageGetter}.
     * @param languageName The name of the language
     * @param langfile The file the language is stored in
     * @throws IOException If the file can not be read
     */
    public LanguageGetter(String languageName, File langfile) throws IOException {
        this.languageName = languageName;
        String content = readFile(langfile);
        language = getHashMapFromString(content);
    }
    
    
    private String readFile(File file) throws IOException {
        FileInputStream fis = new FileInputStream(file);
        byte[] bytes = new byte[fis.available()];
        fis.read(bytes);
        fis.close();
        return new String(bytes, "UTF8");
    }
    
    private HashMap<String, String> getHashMapFromString(String input) {
        HashMap<String, String> map = new HashMap<String, String>();
        String[] blocks = input.split(NEW_LINE_REGEX);
        for (String block : blocks) {
            String[] splited = block.split(SEPERATOR);
            if (splited.length == 2) {
                map.put(splited[0], splited[1]);
            }
        }
        return map;
    }
    
    /**
     * Checks if the language contains a value for the given key.
     * @param key The key
     * @return True if a value was found, false otherwise
     */
    public boolean contains(String key) {
        return language.containsKey(key);
    }
    
    /**
     * Gives the stored phrase for the given key.
     * @param key The key
     * @return The stored phrase, or null if it does not exist in this {@link LanguageGetter}
     */
    public String get(String key) {
        return language.get(key);
    }
    
    /**
     * Returns the number of elements in the {@link LanguageGetter}.
     * @return The number of elements
     */
    public int size() {
        return language.size();
    }
}
