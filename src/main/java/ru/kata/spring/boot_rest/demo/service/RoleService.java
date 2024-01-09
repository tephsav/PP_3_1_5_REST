package ru.kata.spring.boot_rest.demo.service;

import ru.kata.spring.boot_rest.demo.model.Role;

import java.util.List;

public interface RoleService {
    List<Role> getRoles();

    Role getRoleByName(String name);

    void saveRole(Role role);
}
