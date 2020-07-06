package de.visaq.controller;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.File;
import java.io.IOException;

import org.junit.jupiter.api.Test;

/**
 * Tests {@link LanguageGetter}.
 */
public class LanguageGetterTest {
    @Test
    public void initCorrectTest() throws IOException {
        assertEquals(0, new LanguageGetter("lang",
                new File("src/test/resources/EmptyFile.lang")).size());
        LanguageGetter lg = new LanguageGetter("lang",
                new File("src/test/resources/TestLangSize1.lang"));
        assertEquals(1, lg.size());
        assertTrue(lg.contains("msg"));
        assertEquals("Your focus determines your reality", lg.get("msg"));
        
        lg = new LanguageGetter("lang",
                new File("src/test/resources/TestLangSize3.lang"));
        assertEquals(3, lg.size());
        assertTrue(lg.contains("msg1"));
        assertTrue(lg.contains("msg2"));
        assertTrue(lg.contains("msg3"));
        assertEquals("Your focus determines your reality", lg.get("msg1"));
        assertEquals("Do. Or do not. There is no try.", lg.get("msg2"));
        assertEquals("It is a trap!", lg.get("msg3"));
    }
    
    
}
