package de.visaq.view.elements;

import static def.dom.Globals.alert;
import static def.dom.Globals.document;

import jsweet.lang.Date;

/**
 * Banner that informs the User that VisAQ is using Cookies in accordance to EU law.
 */
public class CookieNotice {

    public final boolean acceptance = false;
    private Date date = new Date();

    /**
     * Sole constructor of the class Cookie Notice.
     */
    public CookieNotice() {
    }

    /**
     * Opens the Popup Window Cookie Notice.
     */
    public void popup() {
    	alert();
    }

    /**
     * The Users acceptance of the CookieNotice.
     * 
     * @param acceptance The instance of acceptance
     */
    public void acceptance(boolean acceptance) {
        storeUserData();
    }
    
    /**
     * Stores the user data on the client side
     */
    private void storeUserData() {
        document.cookie = "username=" + Math.random() + ";expire=" + date.setUTCFullYear(date.getFullYear() + 1, 1.0, 1.0) + "00:00:00 UTC" + ";path=/";
    }
}
