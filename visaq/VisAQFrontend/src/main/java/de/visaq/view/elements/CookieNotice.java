package de.visaq.view.elements;

import static def.dom.Globals.document;
import static def.dom.Globals.window;

import org.w3c.dom.html.HTMLFrameElement;

import de.visaq.view.Language;
import de.visaq.view.elements.airquality.AirQualityData;
import de.visaq.view.theme.ColorTheme;
import def.dom.HTMLElement;
import def.dom.Navigator;
import jsweet.lang.Date;

/**
 * Banner that informs the User that VisAQ is using Cookies in accordance to EU law.
 */
public class CookieNotice {

    public final boolean acceptance = false;
    private Date date = new Date();
    Navigator navigator;
    HTMLElement modal = document.getElementById("myModal");
    HTMLElement span = document.createElement("close");
    HTMLElement accept = document.createElement("accept");
    HTMLElement decline = document.createElement("decline");
    HTMLElement moreInfo = document.createElement("moreInformation");
    HTMLElement frame = document.createElement("frame");
    
    
    /**
     * Sole constructor of the class Cookie Notice.
     */
    public CookieNotice() {
    }

    /**
     * Opens the Popup Window Cookie Notice.
     */
    public void popup() {
        frame.style.cssFloat = "left";
        frame.style.display = "block";
        document.body.appendChild(frame);
        frame.setAttribute("style", "top:100px;left:150px;");
        span.setAttribute("style", "top:50px;left:50px");
        span.innerHTML = Language.getInstance().getText("close");
        frame.appendChild(span);
        frame.appendChild(accept);
        frame.appendChild(decline);
        frame.appendChild(moreInfo);
        
        //close
        span.onclick = e -> {
            frame.style.display = "none";
            return e;
        };
        accept.onclick = e -> {
            acceptance(true);
            return e;
        };
        decline.onclick = e -> {
            return e;
        };
        moreInfo.onclick = e -> {
            return Language.getInstance().getText("CookieNotice");
        };
    }

    /**
     * The Users acceptance of the CookieNotice.
     * 
     * @param acceptance The instance of acceptance
     */
    public void acceptance(boolean acceptance) {
        if (acceptance) {
            //storeUserData();
        }
    }
    
    /**
     * Stores the user data on the client side.
     */
    private void storeUserData(AirQualityData airQualityData, ColorTheme colorTheme) {
        document.cookie = "colorTheme =" + colorTheme + "airquality =" + airQualityData
            + ";expire=" + date.setUTCFullYear(date.getFullYear() + 1, 1.0, 1.0) 
                + "00:00:00 UTC" + ";path=/";
        navigator.browserLanguage = Language.getInstance().getText("Language");
        //navigator.geolocation;
    }
    
    private void getUserData() {
    	
    }
}