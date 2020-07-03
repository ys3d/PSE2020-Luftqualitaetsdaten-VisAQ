/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view {
    /**
     * Constructor used to create the language with the given name and updates the global instance
     * accordingly.
     * 
     * @param {*} language      The language
     * @param {string} name          The name
     * @class
     */
    export class Language {
        static instance : Language; public static instance_$LI$() : Language { if(Language.instance == null) Language.instance = new Language(null, null); return Language.instance; };

        /**
         * Gets the current Language instance.
         * 
         * @return {de.visaq.view.Language} The Language instance.
         */
        public static getInstance() : Language {
            Language.instance = Language.instance == null?new Language(null, null):Language.instance;
            return Language.instance_$LI$();
        }

        /**
         * Sets the current Language instance.
         * 
         * @param {de.visaq.view.Language} language The Language instance.
         */
        public static setInstance(language : Language) {
            Language.instance = language;
        }

        /*private*/ icon : L.Icon<L.BaseIconOptions> = null;

        /*private*/ language : any;

        public name : string;

        public constructor(language : any, name : string) {
            if(this.language===undefined) this.language = null;
            if(this.name===undefined) this.name = null;
            this.language = language;
            this.name = name;
        }

        /**
         * Gets the icon.
         * 
         * @return {L.Icon} The icon
         */
        public getIcon() : L.Icon<L.BaseIconOptions> {
            return this.icon;
        }

        /**
         * Sets the icon.
         * 
         * @param {L.Icon} icon The icon
         */
        public setIcon(icon : L.Icon<L.BaseIconOptions>) {
            this.icon = icon;
        }

        /**
         * Gets the localized version of the Properties key.
         * 
         * @param {string} key The Properties key
         * @return {string} Localized text
         */
        public getText(key : string) : string {
            return null;
        }

        /**
         * Used to access the language properties.
         * 
         * @return {*} the used language file
         */
        public getLanguage() : any {
            return this.language;
        }
    }
    Language["__class"] = "de.visaq.view.Language";

}


de.visaq.view.Language.instance_$LI$();
