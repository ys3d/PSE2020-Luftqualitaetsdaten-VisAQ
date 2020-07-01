package de.visaq.model.sensorthings;

/**
 * A Unit of Measurement describes the Unit in which data is presented.
 */
public class UnitOfMeasurement {
    public final String symbol;
    public final String name;
    public final String definition;

    /**
     * Constructs a new {@link UnitOfMeasurement}.
     *
     * @param name       The name of the {@link UnitOfMeasurement}
     * @param symbol     The symbol of the {@link UnitOfMeasurement}
     * @param definition The definition of the {@link UnitOfMeasurement}
     */
    public UnitOfMeasurement(String name, String symbol, String definition) {
        this.name = name;
        this.symbol = symbol;
        this.definition = definition;
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }
}
