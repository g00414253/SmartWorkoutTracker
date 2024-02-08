package org.example.Java;

import org.example.Java.Exercise;

class Weighted implements Exercise {
    private String name;
    private int rep;
    private  String bodyParts;
    private String Equipment;

    public Weighted(String name, int rep, String bodyParts, String equipment) {
        this.name = name;
        this.rep = rep;
        this.bodyParts = bodyParts;
        Equipment = equipment;
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

    public void setRep(int rep) {
        this.rep = rep;
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

    @Override
    public String toString() {
        return "Weighted{" +
                "name='" + name + '\'' +
                ", rep=" + rep +
                ", bodyParts='" + bodyParts + '\'' +
                ", Equipment='" + Equipment + '\'' +
                '}';
    }
}
