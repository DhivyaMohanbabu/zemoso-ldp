package com.zemoso.ums.services;

import com.zemoso.ums.models.User;
import com.zemoso.ums.repositories.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User getOne(Long id) {
        return userRepository.getOne(id);
    }

    @Override
    public User create(User user) {
        return userRepository.saveAndFlush(user);
    }

    @Override
    public void deleteById(Long id){
        userRepository.deleteById(id);
    }

    @Override
    public User update(Long id, User user){
        User existingUser = userRepository.getOne(id);
        BeanUtils.copyProperties(user, existingUser, "user_id");
        return userRepository.saveAndFlush(existingUser);
    }
}
