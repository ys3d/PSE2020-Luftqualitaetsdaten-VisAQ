/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var visaq;
    (function (visaq) {
        var view;
        (function (view) {
            var elements;
            (function (elements) {
                var navbar;
                (function (navbar) {
                    /**
                     * Constructor for the Searchbar instance.
                     * @class
                     */
                    class SearchBar {
                        constructor() {
                            if (this.input === undefined)
                                this.input = null;
                        }
                        /**
                         *
                         */
                        show() {
                        }
                        /**
                         * Gets the input of the user allowing a further use of it.
                         *
                         * @return {string} The Searchbar input
                         */
                        getInput() {
                            return this.input;
                        }
                        /**
                         * Sets the Searchbar input.
                         *
                         * @param {string} input Input of the user
                         * @private
                         */
                        /*private*/ setInput(input) {
                            this.input = input;
                        }
                    }
                    navbar.SearchBar = SearchBar;
                    SearchBar["__class"] = "de.visaq.view.elements.navbar.SearchBar";
                    SearchBar["__interfaces"] = ["de.visaq.view.elements.navbar.NavbarElement"];
                })(navbar = elements.navbar || (elements.navbar = {}));
            })(elements = view.elements || (view.elements = {}));
        })(view = visaq.view || (visaq.view = {}));
    })(visaq = de.visaq || (de.visaq = {}));
})(de || (de = {}));
