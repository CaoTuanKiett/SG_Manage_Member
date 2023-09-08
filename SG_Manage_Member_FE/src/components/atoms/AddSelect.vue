<script setup lang="ts">
import {  PropType } from 'vue';

export type OptionTypes = {
  label: string;
  value: string;
};

defineProps({
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
  modelValue: {
    type: String,
    required: false,
  },
  options: {
    type: Array as PropType<OptionTypes[]>,
    required: true,
  },
})

</script>

<template>
  <select
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>