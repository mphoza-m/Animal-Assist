package co.za.animalassist.service;

import co.za.animalassist.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto findById(Long id);
    List<UserDto> findAll();
    UserDto createUser(UserDto user);
    UserDto updateUser(Long id, UserDto newUserDto);
    UserDto deleteById(Long id);
}
