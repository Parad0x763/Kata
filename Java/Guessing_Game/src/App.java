import java.io.BufferedReader;
import java.io.InputStreamReader;
import Java.Guessing_Game.lib.RandomNumber;

public class App {
    public static void main(String[] args) throws Exception {
        RandomNumber randomNumberGenerated = new RandomNumber();
        String guess = "";
        
        // InputStream inputStream = new Scanner(System.in);
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        while (!guess.equals("Q")) {
            System.out.println("Please guess the number between 1 and 100, enter 'Q' to quit.");
            guess = reader.readLine();
            int number_guess = Integer.parseInt(guess);
            if (number_guess == randomNumberGenerated.GetRandomNumber()) {
                System.out.println("Correct Guess!!");
                break;
            } else if (number_guess > randomNumberGenerated.GetRandomNumber()) {
                System.out.println("Incorrect Guess! Guess was high.");
            } else {
                System.out.println("Incorrect Guess! Guess was low.");
            }
        }        
    }
}
