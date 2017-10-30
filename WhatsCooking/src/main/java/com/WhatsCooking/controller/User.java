package com.WhatsCooking.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer Id;
    private String UName;
    private String Email;
    private String Password;
    private Integer Verified;

    public Integer getId(){
        return Id;
    }
    public void setId(Integer id){
        this.Id=id;
    }

    public String getUName(){
        return UName;
    }
    public void setUName(String uname){
        this.UName = uname;
    }

    public String getEmail(){
        return Email;
    }
    public void setEmail(String email){
        this.Email = email;
    }

    public String getPassword(){
        return Password;
    }
    public void setPassword(String password){
        this.Password = password;
    }

    public Integer getVerified(){
        return Verified;
    }
    public void setVerified(Integer verified){
        this.Verified = verified;
    }


}
