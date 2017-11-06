package com.WhatsCooking.database;

import org.springframework.data.repository.CrudRepository;
import com.WhatsCooking.objects.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {

}

