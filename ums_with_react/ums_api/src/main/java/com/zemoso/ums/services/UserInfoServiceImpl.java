package com.zemoso.ums.services;

import com.zemoso.ums.models.UserInfo;
import com.zemoso.ums.repositories.UserInfoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImpl implements UserInfoService {
    //private final UserRepository userRepository;
    private final UserInfoRepository userInfoRepository;

    public UserInfoServiceImpl(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @Override
    public List<UserInfo> findAll() {
        return userInfoRepository.findAll();
    }

    public UserInfo getOne(Long id) {
        return userInfoRepository.getOne(id);
    }

    @Override
    public UserInfo create(UserInfo userInfo) {
        return userInfoRepository.saveAndFlush(userInfo);
    }

    @Override
    public void deleteById(Long id){
        userInfoRepository.deleteById(id);
    }

    @Override
    public UserInfo update(Long id, UserInfo userInfo){
        UserInfo existingUser = userInfoRepository.getOne(id);
        BeanUtils.copyProperties(userInfo, existingUser, "user_id");
        return userInfoRepository.saveAndFlush(existingUser);
    }
}


