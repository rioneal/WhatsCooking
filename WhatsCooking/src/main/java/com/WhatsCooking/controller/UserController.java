package com.WhatsCooking.controller;

import com.WhatsCooking.database.UserRepository;
import com.WhatsCooking.objects.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping(path="/addUser")
    public @ResponseBody
    String addNewUser(@RequestParam String UName,
                      @RequestParam String email,
                      @RequestParam String pw,
                      @RequestParam Integer verified){

        User u = new User();
        u.setUname(UName);
        u.setEmail(email);
        u.setPassword(pw);
        u.setVerified(verified);
        userRepository.save(u);
        return "Saved";
    }

    @GetMapping(path="/findUser")
    public @ResponseBody Integer getByUID(@RequestParam String UName,
                           @RequestParam String pw) {
        try {
            User user = userRepository.findByUname(UName);
            String pw2 = user.getPassword();
            if(pw.equals(pw2)) return user.getUid();
            else return -1;
        } catch (Exception ex) {
            return -2;
        }
    }

    @GetMapping(path="/getUID")
    public @ResponseBody Integer findUID(@RequestParam String UName){
        try{
            User user = userRepository.findByUname(UName);
            return user.getUid();
        }catch (Exception ex){
            return 0;
        }
    }

    @GetMapping(path="/allUsers")
    public @ResponseBody Iterable<User> getAllUsers(){ return userRepository.findAll(); }

}
