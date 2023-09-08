<script setup lang="ts">

defineProps({
  classesIcon: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <i 
  :class="classesIcon"
  >
  </i>
</template>

<style scoped>

</style>