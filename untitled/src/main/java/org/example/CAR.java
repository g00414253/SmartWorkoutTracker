package org.example;

public class CAR{
    private String colour;
    private int year;

    public CAR(String colour, int year) {
        this.colour = colour;
        this.year = year;
    }

    public CAR() {
    }

    public String getColour() {
        return colour;
    }

    public int getYear() {
        return year;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return "CAR{" +
                "colour='" + colour + '\'' +
                ", year=" + year +
                '}';
    }
}
