package com.WhatsCooking.controller;

import com.WhatsCooking.controller.User;
import com.WhatsCooking.controller.UserRepository;
import com.WhatsCooking.controller.Preferences;
import com.WhatsCooking.controller.PreferencesRepository;
import com.WhatsCooking.controller.Recipe;
import com.WhatsCooking.controller.RecipeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/db")
public class DBController {

    @Autowired
    private UserRepository userRepository;
    private RecipeRepository recipeRepository;
    private PreferencesRepository preferencesRepository;

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

    @GetMapping(path="/allUsers")
    public @ResponseBody Iterable<User> getAllUsers(){ return userRepository.findAll(); }

    @GetMapping(path="/allRecipes")
    public @ResponseBody Iterable<Recipe> getAllRecipes(){ return recipeRepository.findAll(); }

    @GetMapping(path="/allPreferences")
    public @ResponseBody Iterable<Preferences> getAllPreferences(){ return preferencesRepository.findAll(); }
}
