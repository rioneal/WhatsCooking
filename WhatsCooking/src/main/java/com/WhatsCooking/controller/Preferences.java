package com.WhatsCooking.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Preferences {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer UId;
    private Integer Vegan;
    private Integer Vegetarian;
    private Integer GlutenFree;
    private Integer DairyFree;
    private String Other;

    public Integer getUId() { return UId; }
    public void setUId(Integer UId) { this.UId = UId; }

    public Integer getVegan() { return Vegan; }
    public void setVegan(Integer veg){this.Vegan = veg;}

    public Integer getVegetarian() { return Vegetarian; }
    public void setVegetarian(Integer veg){this.Vegetarian = veg;}

    public Integer getGlutenFree() { return GlutenFree; }
    public void setGlutenFree(Integer gf){ this.GlutenFree = gf;}

    public Integer getDairyFree() { return DairyFree; }
    public void setDairyFree(Integer df){ this.DairyFree = df; }

    public String getOther(){ return Other;}
    public void setOther(String other){this.Other = other;}
}
