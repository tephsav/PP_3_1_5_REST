package ru.kata.spring.boot_rest.demo.service;

import ru.kata.spring.boot_rest.demo.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();

    User getUserByUsername(String username);

    User getUserById(Long id);

    void saveUser(User user);

    void updateUser(User user);

    void deleteUserById(Long id);

    String getCurrentUserName();
}
