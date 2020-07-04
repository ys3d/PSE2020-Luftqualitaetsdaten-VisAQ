/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            /**
             * Constructor used to create the language with the given name and updates the global instance
             * accordingly.
             *
             * @param {*} language      The language
             * @param {string} name          The name
             * @class
             */
            class Language {
                constructor(language, name) {
                    /*private*/ this.icon = null;
                    if (this.language === undefined)
                        this.language = null;
                    if (this.name === undefined)
                        this.name = null;
                    this.language = language;
                    this.name = name;
                }
                static instance_$LI$() { if (Language.instance == null)
                    Language.instance = new Language(null, null); return Language.instance; }
                ;
                /**
                 * Gets the current Language instance.
                 *
                 * @return {de.visaq.view.Language} The Language instance.
                 */
                static getInstance() {
                    Language.instance = Language.instance == null ? new Language(null, null) : Language.instance;
                    return Language.instance_$LI$();
                }
                /**
                 * Sets the current Language instance.
                 *
                 * @param {de.visaq.view.Language} language The Language instance.
                 */
                static setInstance(language) {
                    Language.instance = language;
                }
                /**
                 * Gets the icon.
                 *
                 * @return {L.Icon} The icon
                 */
                getIcon() {
                    return this.icon;
                }
                /**
                 * Sets the icon.
                 *
                 * @param {L.Icon} icon The icon
                 */
                setIcon(icon) {
                    this.icon = icon;
                }
                /**
                 * Gets the localized version of the Properties key.
                 *
                 * @param {string} key The Properties key
                 * @return {string} Localized text
                 */
                getText(key) {
                    return null;
                }
                /**
                 * Used to access the language properties.
                 *
                 * @return {*} the used language file
                 */
                getLanguage() {
                    return this.language;
                }
            }
            view.Language = Language;
            Language["__class"] = "de.visaq.view.Language";
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
de.visaq.view.Language.instance_$LI$();
