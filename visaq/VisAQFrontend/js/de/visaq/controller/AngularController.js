var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var controller;
        (function (controller) {
            /**
             * Controller that requests data from the server.
             * @class
             */
            let AngularController = class AngularController {
                /**
                 * Controller that requests data from the server.
                 * @class
                 */
                constructor() {
                    /*private*/ this.request = new http.Request();
                }
                /**
                 * The request to the Server is send here through an angular application. It returns a json data
                 * that is parsed to a Sensorthing data
                 *
                 * @param {string} input     Input that specifies the request
                 * @return {de.visaq.model.Sensorthing} the Sensorthing used in the view
                 */
                sendRequest(input) {
                    this.request.json();
                    return null;
                }
            };
            AngularController = __decorate([
                core.NgModule({ imports: [platform_browser.BrowserModule], declarations: [de.visaq.view.VisAQ], bootstrap: [de.visaq.view.VisAQ] })
            ], AngularController);
            controller.AngularController = AngularController;
            AngularController["__class"] = "de.visaq.controller.AngularController";
        })(controller = visaq.controller || (visaq.controller = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
