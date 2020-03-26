package com.es.user.session.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class SessionController {

    @PostMapping("/set")
    public String setSession(HttpSession session, @RequestParam("name") String name) {
        session.setAttribute("hello", name);
        return "ok!";
    }

    @GetMapping("/get")
    public String getSession(HttpSession session) {
        return session.getAttribute("hello").toString();
    }
}
