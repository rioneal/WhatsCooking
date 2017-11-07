package com.WhatsCooking.controller;

import com.WhatsCooking.controller.Preferences;


import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class PreferencesRowMapper implements RowMapper {
    public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
        Preferences pref = new Preferences();
        pref.setUId(rs.getInt("uid"));
        pref.setDairyFree(rs.getInt("dairy_free"));
        pref.setGlutenFree(rs.getInt("gluten_free"));
        pref.setOther(rs.getString("other"));
        pref.setVegan(rs.getInt("vegan"));
        pref.setVegetarian(rs.getInt("vegetarian"));
        return pref;
    }
}
