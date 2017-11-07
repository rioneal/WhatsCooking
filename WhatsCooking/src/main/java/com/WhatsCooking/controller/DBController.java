package com.WhatsCooking.controller;

import com.WhatsCooking.controller.User;
import com.WhatsCooking.controller.UserRepository;
import com.WhatsCooking.controller.Preferences;
import com.WhatsCooking.controller.PreferencesRepository;
import com.WhatsCooking.controller.Recipe;
import com.WhatsCooking.controller.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import javax.sql.DataSource;
import java.io.Console;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.SQLFeatureNotSupportedException;
import java.util.logging.Logger;

@Controller
@RequestMapping(path="/db")
public class DBController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private PreferencesRepository preferencesRepository;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping(path="/addUser")
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

    @GetMapping(path="/verifyUser")
    public @ResponseBody String verifyUser(@RequestParam String UName,
                                           @RequestParam String pw){

        String sql = "SELECT password FROM user WHERE UName=?";
        String pw2 = jdbcTemplate.queryForObject(
                sql, new Object[] { UName }, String.class);

        if(pw.equals(pw2)) return "True";
        else return "False";
    }

    @GetMapping(path="/getUserPreferences")
    public @ResponseBody Preferences getUserPreferences(@RequestParam int UId){

        String sql = "SELECT * FROM preferences WHERE UId = ?";

        Preferences pref = (Preferences)jdbcTemplate.queryForObject(
                sql, new Object[] { UId }, new PreferencesRowMapper());

        return pref;
    }

    @GetMapping(path="/allUsers")
    public @ResponseBody Iterable<User> getAllUsers(){ return userRepository.findAll(); }

    @GetMapping(path="/allRecipes")
    public @ResponseBody Iterable<Recipe> getAllRecipes(){ return recipeRepository.findAll(); }

    @GetMapping(path="/allPreferences")
    public @ResponseBody Iterable<Preferences> getAllPreferences(){ return preferencesRepository.findAll(); }
}
