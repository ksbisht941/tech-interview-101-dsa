import java.util.ArrayList;

public class Theater {
    private int id;
    private String name;
    private String location;
    private int capacity;

    private ArrayList<Show> shows;

    public Theater(int capacity, int id, String location, String name, ArrayList<Show> shows) {
        this.capacity = capacity;
        this.id = id;
        this.location = location;
        this.name = name;
        this.shows = new ArrayList<>();
    }

    public int getId() {
        return id;
    } 

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public ArrayList<Show> getShows() {
        return shows;
    }

    public void setShows(ArrayList<Show> shows) {
        this.shows = shows;
    }
}
