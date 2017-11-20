package com.WhatsCooking.database;

import org.springframework.data.repository.CrudRepository;
import com.WhatsCooking.objects.User;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByUname(String uName);
}
