package com.es.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.session.data.mongo.config.annotation.web.http.EnableMongoHttpSession;


@SpringBootApplication
@EnableMongoRepositories(basePackages = {"com.es.user.repository"})
@EntityScan(basePackages = {"com.es.user.entity"})
@EnableMongoHttpSession //开启 MongoDB 存储 session 的专用注解
public class ESchoolServiceUserSessionApplication {

    public static void main(String[] args) {
        SpringApplication.run(ESchoolServiceUserSessionApplication.class, args);
    }

}
