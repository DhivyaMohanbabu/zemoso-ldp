package com.zemoso.ums.controllers;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PostControllerTest {
    int expectedValue, actualValue;

    @BeforeEach
    void setUp() {
        expectedValue = 10;
        actualValue = 10;
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void list() {
        assertEquals(expectedValue, actualValue);
    }

    @Test
    void get() {
    }

    @Test
    void create() {
    }

    @Test
    void delete() {
    }

    @Test
    void update() {
    }
}