package co.za.animalassist.service;

import co.za.animalassist.dto.UserDto;
import co.za.animalassist.exception.ResourceNotFoundException;
import co.za.animalassist.mapper.UserMapper;
import co.za.animalassist.model.User;
import co.za.animalassist.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDto findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException(String.format("User with id %s was not found", id)));
        UserDto userDto = UserMapper.mapUserToUserDto(user);
       return userDto;
    }

    @Override
    public List<UserDto> findAll() {
        return userRepository.findAll().stream().map((user -> UserMapper.mapUserToUserDto(user))).collect(Collectors.toList());
    }

    @Override
    public UserDto createUser(UserDto user) {
        User savedUser = UserMapper.mapUserDtoToUser(user);
        userRepository.save(savedUser);
        UserDto savedUserDto = UserMapper.mapUserToUserDto(savedUser);
        return savedUserDto;
    }

    @Override
    public UserDto updateUser(Long id, UserDto newUserDto) {
        UserDto currentUserDto = findById(id);

        User currentUser = UserMapper.mapUserDtoToUser(currentUserDto);
        User updatedUser = UserMapper.mapUserDtoToUser(newUserDto);

        currentUser.setFirstname(updatedUser.getFirstname() == null ? currentUser.getFirstname() : updatedUser.getFirstname());
        currentUser.setLastname(updatedUser.getLastname() == null? currentUser.getLastname() : updatedUser.getLastname());
        currentUser.setEmail(updatedUser.getEmail() == null ? currentUser.getEmail() : updatedUser.getEmail());
        currentUser.setPhone_number(updatedUser.getPhone_number() == null ? currentUser.getPhone_number() : updatedUser.getPhone_number());
        currentUser.setPassword(updatedUser.getPassword() ==  null? currentUser.getPassword() : updatedUser.getPassword());
        currentUser.setRole_id(updatedUser.getRole_id() == null ? currentUser.getRole_id() : updatedUser.getRole_id());

        userRepository.save(currentUser);

        return UserMapper.mapUserToUserDto(currentUser);
    }

    @Override
    public UserDto deleteById(Long id) {
        UserDto deletedUser = findById(id);
        userRepository.delete(UserMapper.mapUserDtoToUser(deletedUser));
       return deletedUser;
    }
}
