/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.controller {
    /**
     * Controller that requests data from the server.
     * @class
     */
    @core.NgModule( { imports: [platform_browser.BrowserModule], declarations: [de.visaq.view.VisAQ], bootstrap: [de.visaq.view.VisAQ] } )
    export class AngularController {
        /*private*/ request : http.Request = new http.Request();

        /**
         * The request to the Server is send here through an angular application. It returns a json data
         * that is parsed to a Sensorthing data
         * 
         * @param {string} input     Input that specifies the request
         * @return {de.visaq.model.Sensorthing} the Sensorthing used in the view
         */
        public sendRequest(input : string) : de.visaq.model.Sensorthing<any> {
            this.request.json();
            return null;
        }
    }
    AngularController["__class"] = "de.visaq.controller.AngularController";

}

