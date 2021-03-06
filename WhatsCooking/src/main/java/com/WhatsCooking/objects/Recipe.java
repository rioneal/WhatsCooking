package com.WhatsCooking.objects;

import org.json.simple.JSONObject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Blob;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer rid;
    private String rinfo;
    private Integer uid;
    private Integer gl;
    private Integer saved;
    private Integer recipeID;

    public Integer getRid(){
            return rid;
        }
    public void setRid(Integer id){
            this.rid =id;
        }

    public String getRinfo(){
            return rinfo;
        }
    public void setRinfo(String rinfo){
            this.rinfo = rinfo;
        }

    public Integer getUid(){
            return uid;
        }
    public void setUID(Integer uid){
            this.uid = uid;
        }

    public Integer getGl(){
            return gl;
        }
    public void setGl(Integer gl){
            this.gl = gl;
        }

    public Integer getSaved(){
            return saved;
        }
    public void setSaved(Integer saved){ this.saved = saved; }

    public Integer getRecipeID(){ return recipeID; }
    public void setRecipeID(Integer recipeID){ this.recipeID = recipeID; }


}
