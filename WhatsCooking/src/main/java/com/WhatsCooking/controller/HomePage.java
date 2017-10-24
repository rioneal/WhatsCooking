package com.WhatsCooking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomePage {

    @RequestMapping("/")
    public String loginPage(){ return "login_page"; }

    @RequestMapping("/search")
    public String searchPage(){ return "home"; }

    @RequestMapping("/saved")
    public String savedRecipes(){ return "saved_recipe"; }

    @RequestMapping("/grocery")
    public String groceryList(){ return "GroceryList"; }

    @RequestMapping("/createAccount")
    public String createAccount(){ return "make_account"; }

}
