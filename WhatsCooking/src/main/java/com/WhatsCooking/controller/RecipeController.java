package com.WhatsCooking.controller;

import com.WhatsCooking.database.RecipeRepository;
import com.WhatsCooking.objects.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class RecipeController {


    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping(path="/getSavedList")
    public @ResponseBody List<Recipe> getSavedList(@RequestParam Integer Uid){

        List<Recipe> recipes = new ArrayList<Recipe>();

        String sql = "SELECT * FROM recipe where uid = ? AND saved = 1";

        List<Map> rows = jdbcTemplate.queryForList(sql, Map.class ,Uid );

        if (rows.size()==0) {return null;}
        for (Map row : rows){
            Recipe recipe = new Recipe();
            recipe.setRid((Integer)row.get("rid"));
            recipe.setRinfo((Blob)row.get("rinfo"));
            recipe.setRid((Integer)row.get("uid"));
            recipe.setGl((Integer)row.get("gl"));
            recipe.setSaved((Integer)row.get("saved"));

            recipes.add(recipe);
        }
        return recipes;
    }

    @GetMapping(path="/getGroceryList")
    public @ResponseBody List<Recipe> getGroceryList(@RequestParam Integer Uid){

        List<Recipe> recipes = new ArrayList<Recipe>();

        String sql = "SELECT * FROM recipe where uid = ? AND gl = 1";

        List<Map> rows = jdbcTemplate.queryForList(sql, Map.class ,Uid );

        if (rows.size()==0) {return null;}
        for (Map row : rows){
            Recipe recipe = new Recipe();
            recipe.setRid((Integer)row.get("rid"));
            recipe.setRinfo((Blob)row.get("rinfo"));
            recipe.setRid((Integer)row.get("uid"));
            recipe.setGl((Integer)row.get("gl"));
            recipe.setSaved((Integer)row.get("saved"));

            recipes.add(recipe);
        }
        return recipes;
    }

    @GetMapping(path="/allRecipes")
    public @ResponseBody Iterable<Recipe> getAllRecipes(){ return recipeRepository.findAll(); }
}
