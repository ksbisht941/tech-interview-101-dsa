import java.util.ArrayList;

public class RegisteredUser extends User {
    private ArrayList<Ticket> bookingHistory;

    public RegisteredUser(int id, String name) {
            super(id, name);
            this.bookingHistory = new ArrayList<>();
        }

    public ArrayList<Ticket> getBookingHistory() {
        return bookingHistory;
    }

    public void setBookingHistory(ArrayList<Ticket> bookingHistory) {
        this.bookingHistory = bookingHistory;
    }
    
}
