package com.WhatsCooking.database;

import org.springframework.data.repository.CrudRepository;
import com.WhatsCooking.objects.Preferences;

public interface PreferencesRepository extends CrudRepository<Preferences, Long> {

    Preferences findByUid(Integer uid);
}
