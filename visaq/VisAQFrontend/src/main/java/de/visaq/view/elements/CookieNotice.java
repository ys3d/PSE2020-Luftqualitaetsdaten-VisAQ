package de.visaq.view.elements;

/**
 * Banner that informs the User that VisAQ is using Cookies in accordance to EU law.
 */
public class CookieNotice {

    public final boolean acceptance = false;

    /**
     * Sole constructor of the class Cookie Notice.
     */
    public CookieNotice() {
    }

    /**
     * Opens the Popup Window Cookie Notice.
     */
    public void popup() {

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
        
    }
}
