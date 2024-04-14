<template>
    <div class="stars">
      <img v-for="index in Math.floor(rating)" :key="index" src="/star.png" alt="Filled Star" />
      <img v-for="index in Math.floor(5 - rating)" :key="index + Math.floor(rating)" src="/empty-star.png" alt="Empty Star" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  interface Props {
    rating: number;
  }
  
  const {rating} = defineProps<Props>()
  </script>
  
  <style scoped>
  .stars {
    display: inline-block;
  }
  .stars img {
    width: 24px; 
    height: 24px; 
  }
  </style>
  