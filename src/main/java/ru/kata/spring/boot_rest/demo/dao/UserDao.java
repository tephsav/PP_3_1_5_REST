package ru.kata.spring.boot_rest.demo.dao;

import ru.kata.spring.boot_rest.demo.model.User;

import java.util.List;

public interface UserDao {

    List<User> getUsers();

    User getUserByUsername(String username);

    User getUserById(Long id);

    void saveUser(User user);

    void updateUser(User user);

    void deleteUserById(Long id);
}
