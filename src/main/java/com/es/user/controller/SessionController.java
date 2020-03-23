package com.es.user.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class SessionController {

    @RequestMapping("/set")
    public String setSession(HttpSession session, @RequestParam("name") String name) {
        session.setAttribute("hello", name);
        return "ok!";
    }

    @RequestMapping("/get")
    public String getSession(HttpSession session) {
        return session.getAttribute("hello").toString();
    }
}
