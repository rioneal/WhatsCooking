package com.WhatsCooking.objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private Integer uid;
    private String uname;
    private String email;
    private String password;
    private Integer verified;

    public Integer getUid(){
        return uid;
    }
    public void setUid(Integer id){
        this.uid =id;
    }

    public String getUname(){
        return uname;
    }
    public void setUname(String uname){
        this.uname = uname;
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
    public void setVerified(Integer verified){ this.verified = verified; }

    public String toString(){
        return uname + ", " + email + ", "+ uid;
    }


}
