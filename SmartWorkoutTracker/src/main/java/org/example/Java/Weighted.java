package org.example.Java;
import org.example.Java.Exercise;
import java.util.Scanner;

class Weighted implements Exercise {
    private String name;
    private int rep;
    private  String bodyParts;
    private String Equipment;
    private double weight;

    public Weighted(String name, int rep, String bodyParts, String equipment,double weight) {
        this.name = name;
        this.rep = rep;
        this.bodyParts = bodyParts;
        Equipment = equipment;
        this.weight=weight;
    }

    public Weighted() {
    }

    @Override
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRep() {
        return rep;
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
        return Equipment;
    }

    public void setEquipment(String equipment) {
        Equipment = equipment;
    }

    public double getWeight() {
        return weight;
    }

    public void setStats() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the weight: ");
        weight = scanner.nextDouble();

        System.out.println("Enter the reps: ");
        rep = scanner.nextInt();
    }

    public String toString() {
        return "Weighted{" +
                "name='" + name + '\'' +
                ", rep=" + rep +
                ", bodyParts='" + bodyParts + '\'' +
                ", Equipment='" + Equipment + '\'' +
                ", weight=" + weight +
                '}';
    }
}
