package T.cinema.com.Cinema.controllers;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PageController {

     @GetMapping({"/", "/home"})
    public String home() {
        return "home";
    }

    @GetMapping("/movies")
    public String movies() {
        return "movies";
    }

    @GetMapping("/schedule")
    public String schedule() {
        return "schedule";
    }

    @GetMapping("/promotions")
    public String promotions() {
        return "promotions";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

     @GetMapping("/login")
    public String loginPage() {
        return "LoginPage";
    }

    @GetMapping("/booking")
    public String showBookingPage(
            @RequestParam(name = "movie", required = false) String movie,
            @RequestParam(name = "showtime", required = false) String showtime,
            Model model) {

        model.addAttribute("movie", movie);
        model.addAttribute("showtime", showtime);
        return "booking";
    }
}
