package co.za.animalassist.controller;

import co.za.animalassist.dto.UserDto;
import co.za.animalassist.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/users/{id}")
    public UserDto getUserById(@PathVariable("id") Long id){
        return userService.findById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users/register")
    public UserDto createUser(@RequestBody UserDto user){
        return userService.createUser(user);
    }

    @ResponseStatus(HttpStatus.FOUND)
    @GetMapping("/users")
    public List<UserDto> getAllUsers(){
        return userService.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping("/users/{id}")
    public UserDto updateUser(@PathVariable Long id, @RequestBody UserDto userDto){
        return userService.updateUser(id, userDto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/users/{id}")
    public UserDto deleteUser(@PathVariable Long id){
        return userService.deleteById(id);
    }

}
