package com.WhatsCooking.objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Preferences {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer uid;
    private Integer vegan;
    private Integer vegetarian;
    private Integer glutenfree;
    private Integer dairyfree;
    private String other;

    public Integer getUid() { return uid; }
    public void setUid(Integer uid) { this.uid = uid; }

    public Integer getVegan() { return vegan; }
    public void setVegan(Integer veg){this.vegan = veg;}

    public Integer getVegetarian() { return vegetarian; }
    public void setVegetarian(Integer veg){this.vegetarian = veg;}

    public Integer getGlutenfree() { return glutenfree; }
    public void setGlutenfree(Integer gf){ this.glutenfree = gf;}

    public Integer getDairyfree() { return dairyfree; }
    public void setDairyfree(Integer df){ this.dairyfree = df; }

    public String getOther(){ return other;}
    public void setOther(String other){this.other = other;}

    public String toString(){
        return vegan + ", " + vegetarian + ", " + glutenfree + ", " + dairyfree + ", " + other;
    }
}
