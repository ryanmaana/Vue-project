<template>
    <v-app-bar :elevation="2" color = "red">
      <v-app-bar-title>Elegant Interiors</v-app-bar-title>
      <v-btn to="/" primary >Home</v-btn>
      <v-btn to="/products">Products</v-btn>
      <v-btn to="/cart">
        Cart
        <v-badge color="white" :content="cart.length">
          <v-icon>mdi-store-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
  </template>
  <script>
  import {mapGetters } from 'vuex'
  
  export default {
    computed: {
              ...mapGetters({
                  cart: 'cart'
              })
          },
  }
  </script>