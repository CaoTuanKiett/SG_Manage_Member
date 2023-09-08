<script setup lang="ts">
import {  PropType } from 'vue';

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined;

defineProps({
  type: {
    type: String as PropType<ButtonTypes> ,
    required: false,
    default: 'button',
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value);
    }
  }
})

</script>

<template>
  <button class="ad-button" :type="type" >
    <slot />
  </button>
</template>

<style scoped>
.ad-button {
  background-color: #1b491c;
  border: none;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>