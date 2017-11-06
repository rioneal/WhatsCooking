package com.WhatsCooking.objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer rid;
    private String rname;
    private Integer uid;
    private String gl;
    private String saved;

    public Integer getRid(){
            return rid;
        }
    public void setRid(Integer id){
            this.rid =id;
        }

    public String getRname(){
            return rname;
        }
    public void setRname(String rname){
            this.rname = rname;
        }

    public Integer getUid(){
            return uid;
        }
    public void setUID(Integer uid){
            this.uid = uid;
        }

    public String getGl(){
            return gl;
        }
    public void setGl(String gl){
            this.gl = gl;
        }

    public String getSaved(){
            return saved;
        }
    public void setSaved(String saved){ this.saved = saved; }


}
