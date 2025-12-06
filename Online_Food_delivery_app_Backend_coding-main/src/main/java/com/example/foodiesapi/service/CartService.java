package com.example.foodiesapi.service;

import com.example.foodiesapi.io.CardResponse;
import com.example.foodiesapi.io.CartRequest;

public interface CartService {
    CardResponse addToCart(CartRequest request);

    CardResponse getCart();

    void clearCart();

    CardResponse removeCart(CartRequest cartRequest);
}
