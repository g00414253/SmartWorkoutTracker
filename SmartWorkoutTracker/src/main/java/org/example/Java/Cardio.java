package org.example.Java;
import java.util.Scanner;

public class Cardio implements Exercise{
    private String name;
    private  String bodyParts;
    private String equipment;
    private double time;
    private double distance;

    public Cardio(String name, String bodyParts, String equipment, double time) {
        this.name = name;
        this.bodyParts = bodyParts;
        this.equipment = equipment;
        this.time = time;
    }

    public Cardio() {
    }

    @Override
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getBodyParts() {
        return bodyParts;
    }

    public void setBodyParts(String bodyParts) {
        this.bodyParts = bodyParts;
    }

    @Override
    public String getEquipment() {
        return equipment;
    }

    public void setEquipment(String equipment) {
        this.equipment = equipment;
    }

    public double getTime() {
        return time;
    }

    public double getDistance() {
        return distance;
    }

    public void setStats() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the Distance: ");
        distance = scanner.nextDouble();


        System.out.println("Enter the Time: ");
       time= scanner.nextInt();
    }

    public String toString() {
        return "Cardio{" +
                "name='" + name + '\'' +
                ", bodyParts='" + bodyParts + '\'' +
                ", equipment='" + equipment + '\'' +
                ", time=" + time +
                ", distance=" + distance +
                '}';
    }
}
