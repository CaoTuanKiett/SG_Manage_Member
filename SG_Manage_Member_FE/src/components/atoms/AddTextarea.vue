<script setup lang="ts">

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
  placeholder: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: false,
  },
})

</script>

<template>
  <textarea
  :id="id"
  :class="classes"
  :name="name"
  :placeholder="placeholder"
  :value="modelValue"
  @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
  />
</template>