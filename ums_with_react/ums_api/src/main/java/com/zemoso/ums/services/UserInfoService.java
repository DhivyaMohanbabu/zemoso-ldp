package com.zemoso.ums.services;

import com.zemoso.ums.models.UserInfo;

import java.util.List;

public interface UserInfoService {
    public List<UserInfo> findAll();
    public UserInfo getOne(Long id);
    public UserInfo create(UserInfo userInfo);
    public void deleteById(Long id);
    public UserInfo update(Long id, UserInfo user);

}
