package com.WhatsCooking.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer id;
    private String UName;
    private String email;
    private String password;
    private Integer verified;

    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }

    public String getUName(){
        return UName;
    }
    public void setUName(String uname){
        this.UName = uname;
    }

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }

    public Integer getVerified(){
        return verified;
    }
    public void setVerified(Integer verified){
        this.verified = verified;
    }


}
