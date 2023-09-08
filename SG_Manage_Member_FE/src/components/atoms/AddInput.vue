<script setup lang="ts">
import {  PropType } from 'vue';

type InputTypes = 'text' | 'email' | 'password' | 'checkbox' | 'radio' | undefined;

defineProps({
  type: {
    type: String as PropType<InputTypes> ,
    required: false,
    default: 'text',
    validator: (value: string) => {
      return [ "text", "email", "password", "checkbox", "radio"].includes(value);
    }
  },
  id: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: [String, Boolean],
    required: false,
  },
})

</script>

<template>
  <input 
  :type="type" 
  :id="id"
  :class="classes" 
  :name="name"
  :placeholder="placeholder"
  :value="modelValue"
  @input="$emit('update:modelValue',
    type === 'checkbox' ? ($event?.target as HTMLInputElement).checked 
    : ($event?.target as HTMLInputElement).value)"
  />
</template>