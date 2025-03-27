import java.util.ArrayList;

public class BookMyShow {
    private ArrayList<User> users;
    private ArrayList<Theater> theater;

    public BookMyShow(ArrayList<Theater> theater, ArrayList<User> users) {
        this.theater = new ArrayList<>();
        this.users = new ArrayList<>();
    }

    public ArrayList<Theater> getTheater() {
        return theater;
    }

    public void setTheater(ArrayList<Theater> theater) {
        this.theater = theater;
    }

    public ArrayList<User> getUsers() {
        return users;
    }

    public void setUsers(ArrayList<User> users) {
        this.users = users;
    }
}
