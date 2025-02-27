<template>
    <div class="top-nav px-4 py-2 bg-gray-100 flex justify-between items-center">
      <div>
        <p class="text-xs text-gray-500 font-montserrat">English</p>
      </div>
  
      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-6">
          <a href="https://learn.millioncoders.org/" class="text-xs text-gray-500 hover:text-gray-700 font-montserrat">Home</a>
          <a href="https://millioncoders.org/learn/" class="text-xs text-gray-500 hover:text-gray-700 font-montserrat">Learn</a>
          <a href="https://millioncoders.org/collaborate/" class="text-xs text-gray-500 hover:text-gray-700 font-montserrat">Collaborate</a>
          <a href="https://millioncoders.org/sponsorship/" class="text-xs text-gray-500 hover:text-gray-700 font-montserrat">Sponsorship</a>
          <a href="https://millioncoders.org/events/" class="text-xs text-gray-500 hover:text-gray-700 font-montserrat">Events</a>
          <a href="https://millioncoders.org/contact-us/" class="text-xs text-gray-500 hover:text-gray-700 font-montserrat">Contact Us</a>
        </div>

        <div class="flex items-center space-x-3">
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Facebook class="w-5 h-5" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Twitter class="w-5 h-5" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Instagram class="w-5 h-5" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Linkedin class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next';
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  
  .font-montserrat {
    font-family: Montserrat, sans-serif;
  }
  </style>