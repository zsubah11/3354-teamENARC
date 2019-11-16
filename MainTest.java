package com.company;

import org.junit.jupiter.api.Assertions;
import static org.junit.jupiter.api.Assertions.*;

class MainTest {
    @org.junit.jupiter.api.Test
    void applyDiscount() {
        final float beforeDiscount = 10;
        float afterDiscount;

        String studentDiscount = "Student";
        afterDiscount = assertDoesNotThrow(() -> Main.applyDiscount(beforeDiscount, studentDiscount));
        assertEquals(9.0,afterDiscount);

        String seniorDiscount = "Senior";
        afterDiscount = assertDoesNotThrow(() -> Main.applyDiscount(beforeDiscount, seniorDiscount));
        assertEquals(8.5,afterDiscount);

        String militaryDiscount = "Military";
        afterDiscount = assertDoesNotThrow(() -> Main.applyDiscount(beforeDiscount, militaryDiscount));
        assertEquals(8.0,afterDiscount);

        String fakeDiscount = "Fake Discount";
        Assertions.assertThrows(IllegalArgumentException.class, () -> Main.applyDiscount(beforeDiscount, fakeDiscount));

    }
}