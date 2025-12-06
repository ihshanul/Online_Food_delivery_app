package com.example.foodiesapi.service;

import com.example.foodiesapi.entity.CartEntity;
import com.example.foodiesapi.io.CardResponse;
import com.example.foodiesapi.io.CartRequest;
import com.example.foodiesapi.repository.CardRepository;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@AllArgsConstructor
@Service
public class CartServiceImpl implements  CartService{

    private  final CardRepository cardRepository;
    private  final UserService userService;

    @Override
    public CardResponse addToCart(CartRequest request) {
        String loggedInUserId =  userService.findByUserId();
       Optional<CartEntity> cartOptional = cardRepository.findByUserId(loggedInUserId);
      CartEntity cart =  cartOptional.orElseGet(()->new CartEntity(loggedInUserId, new HashMap<>()));
      Map<String , Integer > cartItems = cart.getItems();
      cartItems.put(request.getFoodId() , cartItems.getOrDefault(request.getFoodId() , 0)+1);
      cart.setItems(cartItems);
      cart = cardRepository.save(cart);
      return convertToResponse(cart);
    }

    @Override
    public CardResponse getCart() {
        String loggedInUserId = userService.findByUserId();
        CartEntity entity = cardRepository.findByUserId(loggedInUserId)
                .orElse(new CartEntity(null , loggedInUserId , new HashMap<>()));
        return convertToResponse(entity);
    }

    @Override
    public void clearCart() {
        String loggedInUserId = userService.findByUserId();
        cardRepository.deleteByUserId(loggedInUserId);
    }

    @Override
    public CardResponse removeCart(CartRequest cartRequest) {
        String loggedInUserId = userService.findByUserId();
        CartEntity entity  =  cardRepository.findByUserId(loggedInUserId)
                .orElseThrow(()-> new RuntimeException("cart is not found"));
        Map<String, Integer> cartItems = entity.getItems();
        if (cartItems.containsKey(cartRequest.getFoodId())){
            int currentQty = cartItems.get(cartRequest.getFoodId());
            if (currentQty>0){
                cartItems.put(cartRequest.getFoodId(), currentQty-1);
            }else{
                cartItems.remove(cartRequest.getFoodId());
            }
            entity = cardRepository.save(entity);
        }
        return convertToResponse(entity);

    }

    private CardResponse convertToResponse (CartEntity cartEntity){
        return CardResponse.builder()
                .id(cartEntity.getId())
                .userId(cartEntity.getUserId())
                .items(cartEntity.getItems())
                .build();
    }
}
