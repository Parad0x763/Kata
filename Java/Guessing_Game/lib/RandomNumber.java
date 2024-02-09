package Java.Guessing_Game.lib;
import java.util.Random;

public class RandomNumber {
    private int randomNumber;

    public RandomNumber() {
        Random random = new Random();
        randomNumber = random.nextInt(100) + 1; //from [0 + 1, 100 + 1) 
    }

    public int GetRandomNumber() {
        return randomNumber;
    }
}
