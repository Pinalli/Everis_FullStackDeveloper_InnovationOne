package br.com.pinalli.springweb.springwebmvc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servelet.ModelAndView;
import br.com.pinalli.springweb.springwebmvc.model.Jedi;

@Controller
public class ControllerJedi {


    @GetMapping("/jedi")
    public ModelAndView Jedi(){

        final ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName('"jedi');

        final Jedi luke =  new Jedi("Luke", "Skywalker");
        modelAndView.addObject("allJedi",ListOff(luke));

        return modelAndView;
    }
}
