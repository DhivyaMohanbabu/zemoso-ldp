package com.zemoso.ums.services;

import com.zemoso.ums.models.User;

import java.util.List;

public interface UserService {
    public List<User> findAll();
    public User getOne(Long id);
    public User create(User user);
    public void deleteById(Long id);
    public User update(Long id, User user);
}
