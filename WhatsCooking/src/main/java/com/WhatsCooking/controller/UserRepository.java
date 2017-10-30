package com.WhatsCooking.controller;

import org.springframework.data.repository.CrudRepository;
import com.WhatsCooking.controller.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
