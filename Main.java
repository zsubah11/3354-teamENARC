package com.company;

public class Main {

    public static void main(String[] args) {

    }

    static float applyDiscount(float currentPrice, String discount) throws IllegalArgumentException {
        float discountedPrice = currentPrice;
        switch(discount)
        {
            case "Student":
                discountedPrice *= (1-.1);
                break;
            case "Senior":
                discountedPrice *= (1- .15);
                break;
            case "Military":
                discountedPrice *= (1-.2);
                break;
            default:
                throw new IllegalArgumentException("Discount value does not exist");
        }
        return discountedPrice;

    }


}
