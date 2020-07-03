/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace de.visaq.view.elements.navbar {
    /**
     * Constructor for the Searchbar instance.
     * @class
     */
    export class SearchBar implements de.visaq.view.elements.navbar.NavbarElement {
        /*private*/ input : string;

        public constructor() {
            if(this.input===undefined) this.input = null;
        }

        /**
         * 
         */
        public show() {
        }

        /**
         * Gets the input of the user allowing a further use of it.
         * 
         * @return {string} The Searchbar input
         */
        public getInput() : string {
            return this.input;
        }

        /**
         * Sets the Searchbar input.
         * 
         * @param {string} input Input of the user
         * @private
         */
        /*private*/ setInput(input : string) {
            this.input = input;
        }
    }
    SearchBar["__class"] = "de.visaq.view.elements.navbar.SearchBar";
    SearchBar["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];


}

