import java.util.Date;

public class Ticket {
    private int id;
    private String ownerName;
    private Date bookingTime;
    private int noOfSeats;
    private Show bookedShow; 

    public Ticket(Show bookedShow, Date bookingTime, int id, int noOfSeats, String ownerName) {
        this.bookedShow = bookedShow;
        this.bookingTime = bookingTime;
        this.id = id;
        this.noOfSeats = noOfSeats;
        this.ownerName = ownerName;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public Date getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(Date bookingTime) {
        this.bookingTime = bookingTime;
    }

    public int getNoOfSeats() {
        return noOfSeats;
    }

    public void setNoOfSeats(int noOfSeats) {
        this.noOfSeats = noOfSeats;
    }

    public Show getBookedShow() {
        return bookedShow;
    }

    public void setBookedShow(Show bookedShow) {
        this.bookedShow = bookedShow;
    }
}
