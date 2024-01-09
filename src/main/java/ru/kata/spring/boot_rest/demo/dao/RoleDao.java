package ru.kata.spring.boot_rest.demo.dao;

import ru.kata.spring.boot_rest.demo.model.Role;

import java.util.List;

public interface RoleDao {
    List<Role> getRoles();

    Role getRoleByName(String name);

    void saveRole(Role role);
}