package com.WhatsCooking.controller;

import com.WhatsCooking.database.PreferencesRepository;
import com.WhatsCooking.objects.Preferences;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.criteria.CriteriaBuilder;

@Controller
public class PreferencesController {

    @Autowired
    private PreferencesRepository preferencesRepository;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping(path="/setPreferences")
    public @ResponseBody String setPreferences(@RequestParam Integer Uid,
                                               @RequestParam Integer Vegan,
                                               @RequestParam Integer Veg,
                                               @RequestParam Integer gl,
                                               @RequestParam Integer df,
                                               @RequestParam String other){
        Preferences preferences = new Preferences();

        if(Uid == 0) return "User does not exist";

        preferences.setUid(Uid);
        preferences.setVegan(Vegan);
        preferences.setVegetarian(Veg);
        preferences.setGlutenfree(gl);
        preferences.setDairyfree(df);
        preferences.setOther(other);

        preferencesRepository.save(preferences);

        return "Saved";
    }

    @GetMapping(path="/getPreferences")
    public @ResponseBody Preferences findPreferences(@RequestParam Integer Uid){

        try{
            Preferences preferences = preferencesRepository.findByUid(Uid);
            return preferences;
        }catch (Exception ex){
            return null;
        }

    }

    @GetMapping(path="/allPreferences")
    public @ResponseBody Iterable<Preferences> getAllPreferences(){ return preferencesRepository.findAll(); }
}
