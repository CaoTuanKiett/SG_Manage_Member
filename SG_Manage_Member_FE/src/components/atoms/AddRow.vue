<script setup lang="ts">
  import { defineProps } from "vue"
  import { computed } from "vue"


  const props = defineProps({
    cols: {
      type: String,
      required: false,
      default: 1,
    },
    gap: {
      type: String,
      required: false,
      default: '4',
    },
  })

  const numberCols = computed(() => { return `grid-cols-${props.cols}` });

  const gapCols = computed(() => { return `gap-${props.gap}` });
</script>


<template>
  <div class="grid" :class="[ numberCols, gapCols]">
    <slot />
  </div>
</template>