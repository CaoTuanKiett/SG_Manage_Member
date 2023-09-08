<template>
  <button
    :type="type"
    @click="$emit('click-something')"
    :class="[classesButton, { 'block': isActive }]"
  >
    <font-awesome-icon
      :class="classesIcon"
      :icon="[iconWeight, icon]"
    />
    <p :class="classesP">
      <slot />
    </p>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'button',
    required: true,
  },
  classesButton: {
    type: String,
    required: true,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  classesIcon: {
    type: String,
    default: '',
  },
  iconWeight: {
    type: String,
    default: 'fas',
  },
  icon: {
    type: String,
    required: true,
  },
  classesP: {
    type: String,
    default: '',
  },
});
</script>
