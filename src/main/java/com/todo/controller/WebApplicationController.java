package com.todo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebApplicationController {


    @RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");

        return "index";
    }



}
