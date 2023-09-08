<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag:{
    type: String,
    required: true,
    default: 'p',
    validator: (value: string) => {
      return ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'span'].includes(value);
    }
  },
  for: {
    type: String,
    required: false,
  },
})

const getForProp = computed(() => {
  props.tag === 'label' ? props.for : null
})

</script>

<template>
  <component class="add-text" :is="tag" :for="getForProp">
    
    <slot />
    
  </component>
</template>