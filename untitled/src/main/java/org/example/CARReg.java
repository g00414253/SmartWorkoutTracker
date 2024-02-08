package org.example;

public class CARReg extends CAR{
    private String Reg;
    private String License;

    public CARReg(String colour, int year, String reg, String license) {
        super(colour, year);
        Reg = reg;
        License = license;
    }

    public CARReg() {
    }

    public CARReg(String reg, String license) {
        Reg = reg;
        License = license;
    }

    public String getReg() {
        return Reg;
    }

    public String getLicense() {
        return License;
    }

    public void setReg(String reg) {
        Reg = reg;
    }

    public void setLicense(String license) {
        License = license;
    }

    @Override
    public String toString() {
        return "CARReg{" + super.toString() +
                "Reg='" + Reg + '\'' +
                ", License='" + License + '\'' +
                '}';
    }
}
