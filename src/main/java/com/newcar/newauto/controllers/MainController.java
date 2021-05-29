package com.newcar.newauto.controllers;

import com.newcar.newauto.ParsJsop;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;

@Controller
public class MainController {

    @GetMapping("/")
    public String index(Model model) {


        return "index";
    }

}