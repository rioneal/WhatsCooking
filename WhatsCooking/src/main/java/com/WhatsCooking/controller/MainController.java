package com.WhatsCooking.controller;

import com.WhatsCooking.controller.User;
import com.WhatsCooking.controller.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/db")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewUser(@RequestParam String UName,
                                           @RequestParam String email,
                                           @RequestParam String pw,
                                           @RequestParam Integer verified){

        User u = new User();
        u.setUName(UName);
        u.setEmail(email);
        u.setPassword(pw);
        u.setVerified(verified);
        userRepository.save(u);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }
}
