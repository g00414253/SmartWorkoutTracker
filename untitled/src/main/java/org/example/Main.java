package org.example;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        CAR myCar = new CAR("Red", 2011);
        System.out.println(myCar.toString());


        CARReg Car1 = new CARReg("Red", 2000, "10-MO-3212", "124234324");
        System.out.println(Car1.toString());
    }
}