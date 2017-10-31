package com.WhatsCooking.controller;

import org.springframework.data.repository.CrudRepository;
import com.WhatsCooking.controller.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {

}

