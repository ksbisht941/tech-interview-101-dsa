import Enums.Genre;
import Enums.Language;

public class Movie {
    private String name;
    private float rating = 0.0f;
    private Language language;
    private Genre genre;

    public Movie(Genre genre, Language language, String name, float rating) {
        this.genre = genre;
        this.language = language;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }
}