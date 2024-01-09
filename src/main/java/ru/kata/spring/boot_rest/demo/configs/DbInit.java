package ru.kata.spring.boot_rest.demo.configs;

import org.springframework.context.annotation.Configuration;
import ru.kata.spring.boot_rest.demo.model.Role;
import ru.kata.spring.boot_rest.demo.model.User;
import ru.kata.spring.boot_rest.demo.service.RoleService;
import ru.kata.spring.boot_rest.demo.service.UserService;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

@Configuration
public class DbInit {
    private final UserService userService;
    private final RoleService roleService;

    public DbInit(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @PostConstruct
    public void createUsers() {
        roleService.saveRole(new Role("ROLE_USER"));
        roleService.saveRole(new Role("ROLE_ADMIN"));

        Set<Role> adminRoleSet = new HashSet<>();
        Set<Role> userRoleSet = new HashSet<>();
        Set<Role> allRoleSet = new HashSet<>();

        adminRoleSet.add(roleService.getRoleByName("ROLE_ADMIN"));
        userRoleSet.add(roleService.getRoleByName("ROLE_USER"));
        allRoleSet.add(roleService.getRoleByName("ROLE_USER"));
        allRoleSet.add(roleService.getRoleByName("ROLE_ADMIN"));

        userService.saveUser(new User("John", "Doe", 25, "john@example.com", "ADMIN", adminRoleSet));
        userService.saveUser(new User("Mary", "Bob", 30, "mary@example.com", "USER", userRoleSet));
        userService.saveUser(new User("Alex", "Joshua", 22, "alex@example.com", "USER", userRoleSet));
        userService.saveUser(new User("Elena", "Nives", 28, "elena@example.com", "ADMINUSER", allRoleSet));
    }
}
