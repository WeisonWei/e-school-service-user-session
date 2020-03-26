package com.es.user.session.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class SessionController {

    @PostMapping("/set/{name}")
    public String setSession(HttpSession session, @PathVariable("name") String name) {
        session.setAttribute("hello", name);
        return "ok!";
    }

    @GetMapping("/get")
    public String getSession(HttpSession session) {
        return session.getAttribute("hello").toString();
    }
}
