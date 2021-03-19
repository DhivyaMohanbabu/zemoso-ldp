package com.zemoso.ums.controllers;

import com.zemoso.ums.DTO.UserInfoDto;
import com.zemoso.ums.models.UserInfo;
import com.zemoso.ums.services.UserInfoService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/userInfo")
public class UserInfoController {
    private final UserInfoService userInfoService;
    private ModelMapper modelMapper;

    Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserInfoController(UserInfoService userInfoService, ModelMapper modelMapper) {
        this.userInfoService = userInfoService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public List<UserInfo> list(){
        return userInfoService.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public UserInfoDto get(@PathVariable Long id){
        UserInfoDto userInfoDto = convertToDto(userInfoService.getOne(id));
        logger.error("My logging test comment");
        return userInfoDto;
    }

    private UserInfoDto convertToDto(UserInfo userInfo) {
        UserInfoDto userInfoDto = modelMapper.map(userInfo, UserInfoDto.class);
        return userInfoDto;
    }

    @PostMapping
    public UserInfo create(@RequestBody final UserInfo userInfo){
        return userInfoService.create(userInfo);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        userInfoService.deleteById(id);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public UserInfo update(@PathVariable Long id, @RequestBody UserInfo userInfo){
        return userInfoService.update(id, userInfo);
    }
}
