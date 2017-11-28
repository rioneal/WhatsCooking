package com.WhatsCooking.controller;

import com.WhatsCooking.database.RecipeRepository;
import com.WhatsCooking.objects.Recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class RecipeController {


    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @RequestMapping(path="/getRID")
    public @ResponseBody List<Integer> getRID(@RequestParam Integer Uid){

        String sql = "SELECT recipeID FROM recipe where uid = ? AND saved = 1";

        List<Integer> rows = jdbcTemplate.queryForList(sql, Integer.class ,Uid );

        if (rows.size()==0) {return null;}

        return rows;
    }

    @RequestMapping(method={RequestMethod.GET, RequestMethod.POST},path="/saveRecipe")
    public @ResponseBody String saveRecipe(@RequestParam Integer Uid,
                                           @RequestParam Integer Rid,
                                           @RequestParam String Rinfo){

        if(Uid == null){return "Not logged in";}

        Recipe recipe;

        recipe = new Recipe();

        recipe.setUID(Uid);
        recipe.setRecipeID(Rid);
        recipe.setRinfo((String)Rinfo);
        recipe.setSaved(1);
        recipe.setGl(0);

        recipeRepository.save(recipe);

        return "Saved";
    }

    @GetMapping(path="/getSavedList")
    public @ResponseBody List<String> getSavedList(@RequestParam Integer Uid){

        String sql = "SELECT rinfo FROM recipe where uid = ? AND saved = 1";

        List<String> rows = jdbcTemplate.queryForList(sql, String.class ,Uid );

        if (rows.size()==0) {return null;}
        return rows;
    }

    @RequestMapping(method={RequestMethod.GET, RequestMethod.POST},path="/saveGrocery")
    public @ResponseBody String saveGrocery(@RequestParam Integer Uid,
                                           @RequestParam Integer Rid,
                                           @RequestParam String Rinfo){

        if(Uid == null){return "Not logged in";}

        Recipe recipe;

        recipe = new Recipe();

        recipe.setUID(Uid);
        recipe.setRecipeID(Rid);
        recipe.setRinfo((String)Rinfo);
        recipe.setSaved(0);
        recipe.setGl(1);

        recipeRepository.save(recipe);

        return "Saved";
    }

    @GetMapping(path="/getGroceryList")
    public @ResponseBody List<String> getGroceryList(@RequestParam Integer Uid){

        String sql = "SELECT rinfo FROM recipe where uid = ? AND gl = 1";

        List<String> rows = jdbcTemplate.queryForList(sql, String.class ,Uid );

        if(rows.size() == 0){return null;}

        return rows;
    }

    @GetMapping(path="/allRecipes")
    public @ResponseBody Iterable<Recipe> getAllRecipes(){ return recipeRepository.findAll(); }
}
