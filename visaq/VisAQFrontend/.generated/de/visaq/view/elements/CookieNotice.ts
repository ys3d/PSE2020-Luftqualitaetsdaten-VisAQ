/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements {
    /**
     * Sole constructor of the class Cookie Notice.
     * @class
     */
    export class CookieNotice {
        public __acceptance : boolean = false;

        /*private*/ date : jsweet.lang.Date = new jsweet.lang.Date();

        navigator : Navigator;

        modal : HTMLElement = document.getElementById("myModal");

        span : HTMLElement = document.createElement("close");

        accept : HTMLElement = document.createElement("accept");

        decline : HTMLElement = document.createElement("decline");

        moreInfo : HTMLElement = document.createElement("moreInformation");

        frame : HTMLElement = document.createElement("frame");

        public constructor() {
            if(this.navigator===undefined) this.navigator = null;
        }

        /**
         * Opens the Popup Window Cookie Notice.
         */
        public popup() {
            this.frame.style.cssFloat = "left";
            this.frame.style.display = "block";
            document.body.appendChild(this.frame);
            this.frame.setAttribute("style", "top:100px;left:150px;");
            this.span.setAttribute("style", "top:50px;left:50px");
            this.span.innerHTML = de.visaq.view.Language.getInstance().getText("close");
            this.frame.appendChild(this.span);
            this.frame.appendChild(this.accept);
            this.frame.appendChild(this.decline);
            this.frame.appendChild(this.moreInfo);
            this.span.onclick = (e) => {
                this.frame.style.display = "none";
                return e;
            };
            this.accept.onclick = (e) => {
                this.acceptance(true);
                return e;
            };
            this.decline.onclick = (e) => {
                return e;
            };
            this.moreInfo.onclick = (e) => {
                return de.visaq.view.Language.getInstance().getText("CookieNotice");
            };
        }

        /**
         * The Users acceptance of the CookieNotice.
         * 
         * @param {boolean} acceptance The instance of acceptance
         */
        public acceptance(acceptance : boolean) {
            if(acceptance) {
            }
        }

        /**
         * Stores the user data on the client side.
         * @param {de.visaq.view.elements.airquality.AirQualityData} airQualityData
         * @param {de.visaq.view.theme.ColorTheme} colorTheme
         * @private
         */
        /*private*/ storeUserData(airQualityData : de.visaq.view.elements.airquality.AirQualityData, colorTheme : de.visaq.view.theme.ColorTheme) {
            document.cookie = "colorTheme =" + colorTheme + "airquality =" + airQualityData + ";expire=" + this.date.setUTCFullYear(this.date.getFullYear() + 1, 1.0, 1.0) + "00:00:00 UTC;path=/";
            this.navigator.browserLanguage = de.visaq.view.Language.getInstance().getText("Language");
        }

        /*private*/ getUserData() {
        }
    }
    CookieNotice["__class"] = "de.visaq.view.elements.CookieNotice";

}

