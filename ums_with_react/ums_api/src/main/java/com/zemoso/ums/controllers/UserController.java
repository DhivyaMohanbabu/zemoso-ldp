package com.zemoso.ums.controllers;

import com.zemoso.ums.DTO.UserDto;
import com.zemoso.ums.models.User;
import com.zemoso.ums.services.UserService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserService userService;
    private ModelMapper modelMapper;

    Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserService userService, ModelMapper modelMapper){
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public List<User> list(){
        return userService.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public UserDto get(@PathVariable Long id){
        UserDto userDto = convertToDto(userService.getOne(id));
        logger.error("My logging test comment");
        return userDto;
    }

    private UserDto convertToDto(User user) {
        UserDto userDto = modelMapper.map(user, UserDto.class);
        return userDto;
    }

    @PostMapping
    public User create(@RequestBody final User user){
        return userService.create(user);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        userService.deleteById(id);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public User update(@PathVariable Long id, @RequestBody User user){
        return userService.update(id, user);
    }
}

