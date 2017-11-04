package com.WhatsCooking.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer RId;
    private String RName;
    private Integer UId;
    private String GL;
    private String Saved;

    public Integer getRId(){
            return RId;
        }
    public void setRId(Integer id){
            this.RId=id;
        }

    public String getRName(){
            return RName;
        }
    public void setRName(String rname){
            this.RName = rname;
        }

    public Integer getUId(){
            return UId;
        }
    public void setUID(Integer uid){
            this.UId = uid;
        }

    public String getGL(){
            return GL;
        }
    public void setGL(String gl){
            this.GL = gl;
        }

    public String getSaved(){
            return Saved;
        }
    public void setSaved(String saved){ this.Saved = saved; }


}
