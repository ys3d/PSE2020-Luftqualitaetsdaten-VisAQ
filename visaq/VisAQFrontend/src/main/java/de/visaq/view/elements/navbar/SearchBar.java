package de.visaq.view.elements.navbar;

/**
 * Searchbar that the User can use in order to look up a particular city using the city name or the
 * postal code of the city.
 */
public class SearchBar implements NavbarElement {

    private String input;

    /**
     * Constructor for the Searchbar instance.
     */
    public SearchBar() {

    }

    @Override
    public void show() {

    }

    /**
     * Gets the input of the user allowing a further use of it.
     * 
     * @return The Searchbar input
     */
    public String getInput() {
        return input;
    }

    /**
     * Sets the Searchbar input.
     * 
     * @param input Input of the user
     */
    private void setInput(String input) {
        this.input = input;
    }

}
