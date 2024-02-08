package org.example.Java;
import java.util.Scanner;

public class ExerciseSelectionSystem {
    public static void main(String[] args) {
        //Cardio DB
        Cardio Treadmill = new Cardio();
        Treadmill.setName("Running");
        Treadmill.setEquipment("Treadmill");
        Treadmill.setBodyParts("Lower Body and cardio");

        Cardio Rowing = new Cardio();
        Rowing.setName("Rowing");
        Treadmill.setEquipment("Row Machine");
        Treadmill.setBodyParts("Full Body and cardio");

        //Weighted DB
        Weighted BenchPress = new Weighted();
        BenchPress.setName("Bench Press");
        BenchPress.setBodyParts("Chest,Shoulders and triceps");
        BenchPress.setEquipment("Bench and Barbell or Dumbbell");

        Weighted OverheadPress = new Weighted();
        OverheadPress.setName("OverHead press");
        OverheadPress.setBodyParts("Shoulders and triceps");
        OverheadPress.setEquipment("Bench and Barbell or Dumbbell");

        Weighted Pullups = new Weighted();
        Pullups.setName("Pull ups ");
        Pullups.setBodyParts("Back and Biceps");
        Pullups.setEquipment("A pull up bar");

        Weighted Rows = new Weighted();
        Rows.setName("Rows");
        Rows.setBodyParts("Back and Biceps");
        Rows.setEquipment("Barbell or Dumbbell");

        Weighted Squat = new Weighted();
        Squat.setName("Squat");
        Squat.setBodyParts("Legs");
        Squat.setEquipment("A rack and Barbell");

        Weighted Deadlift = new Weighted();
        Deadlift.setName("Deadlift");
        Deadlift.setBodyParts("Legs and Back ");
        Deadlift.setEquipment("Barbell and Platform");


        //An array to turn all in Exercise items
        Exercise[] exercises = new Exercise[]{
                Treadmill, Rowing, BenchPress, OverheadPress, Pullups, Rows, Squat, Deadlift
        };

        //Selection for exercise choice will be from the button
        //Test using a text input
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a exercise: ");
        String choice = sc.nextLine();

        //Switch for exercise choices
        switch (choice) {
            case "Treadmill":
                Treadmill.setStats();
                System.out.println(Treadmill.toString());
                break;
            case "Rowing":
                Rowing.setStats();
                System.out.println(Rowing.toString());
                break;
            case "Bench Press":
                BenchPress.setStats();
                System.out.println(BenchPress.toString());
                break;
            case "Overhead Press":
                OverheadPress.setStats();
                System.out.println(OverheadPress.toString());
                break;
            case "Pullups":
                Pullups.setStats();
                System.out.println(Pullups.toString());
                break;
            case "Rows":
                Rows.setStats();
                System.out.println(Rows.toString());
                break;
            case "Squat":
                Squat.setStats();
                System.out.println(Squat.toString());
                break;
            case "Deadlift":
                Deadlift.setStats();
                System.out.println(Deadlift.toString());
                break;
            default:
                System.out.println("Invalid entry:" + choice);
                break;
        }
    }
}
