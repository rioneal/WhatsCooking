package com.WhatsCooking.controller;

import com.WhatsCooking.database.RecipeRepository;
import com.WhatsCooking.objects.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RecipeController {


    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping(path="/allRecipes")
    public @ResponseBody
    Iterable<Recipe> getAllRecipes(){ return recipeRepository.findAll(); }
}
