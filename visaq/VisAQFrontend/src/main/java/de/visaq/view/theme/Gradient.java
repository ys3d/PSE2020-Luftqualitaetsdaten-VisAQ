package de.visaq.view.theme;

import java.awt.Color;

/**
 * Describes a ColorRange between two points.
 */
public class Gradient {
    public final Color first;
    public final Color second;

    /**
     * Constructs a ColorRange using the two given colors.
     * 
     * @param first  The first Color
     * @param second The second Color
     */
    public Gradient(Color first, Color second) {
        super();
        this.first = first;
        this.second = second;
    }

    /**
     * Returns a color that is at * 100 percent between the color first and second by linear
     * interpolation in HSV color space.
     * 
     * @param at A value in [0,1]
     * @return The Color
     */
    public Color get(float at) {
        float[] min = new float[3];
        Color.RGBtoHSB(first.getRed(), first.getGreen(), first.getBlue(), min);
        float[] max = new float[3];
        Color.RGBtoHSB(second.getRed(), second.getGreen(), second.getBlue(), max);
        float[] linearInterpolated = new float[3];

        for (int i = 0; i < 3; i++) {
            linearInterpolated[i] = at * max[i] + (1.f - at) * min[i];
        }

        return new Color(Color.HSBtoRGB(linearInterpolated[0], linearInterpolated[1],
                linearInterpolated[2]));
    }
}
