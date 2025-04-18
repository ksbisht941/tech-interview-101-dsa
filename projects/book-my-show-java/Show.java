import java.util.Date;

public class Show {
    private int id;
    private Date showTime;
    private int availableSeats;
    private Movie movie;
    private Theater theater;

    public Show(int availableSeats, int id, Movie movie, Date showTime, Theater threater) {
        this.id = id;
        this.movie = movie;
        this.showTime = showTime;
        this.theater = threater;
        this.availableSeats = theater.getCapacity();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getShowTime() {
        return showTime;
    }

    public void setShowTime(Date showTime) {
        this.showTime = showTime;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Theater getTheater() {
        return theater;
    }

    public void setTheater(Theater theater) {
        this.theater = theater;
    }
}
