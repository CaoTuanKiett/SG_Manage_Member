<template>
  <router-link 
    :to="to"
    :class="[classesRouter, { 'active': isActive }]"
    >
    <font-awesome-icon 
      :class= "classesIcon" 
      :icon="[iconWeight, icon]" />
    <p
      :class="classesP"
    >
      <slot />
    </p>
  </router-link>
</template>

<script setup> 
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';

  defineProps({
    to: {
      type: Object,
      required: true,
    },
    classesRouter: {
      type: String,
      required: false,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    classesIcon: {
      type: String,
      required: false,
      default: ''
    },
    iconWeight: {
      type: String,
      required: false,
      default: 'fas'
    },
    icon: {
      type: String,
      required: true,
    },
    classesP: {
      type: String,
      required: false,
      default: ''
    },

    
  })


</script>

<style scoped>

.active {
    background-color: var(--color-primary);
    border-left: 7px solid rgb(138, 197, 0);
  }

  .active p {
    color: white;
    font-weight: 500;
  }

  .active .icon {
    color: white;
  }

</style>