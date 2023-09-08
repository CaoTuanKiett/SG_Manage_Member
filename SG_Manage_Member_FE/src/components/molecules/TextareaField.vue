<script setup lang="ts">
  import { reactive } from 'vue';

  import AddTextarea from '../atoms/AddTextarea.vue';
  import AddText from '../atoms/AddText.vue';

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
  label: {
    type: String,
    required: false,
  },
})

</script>

<template>
  <div class="ml-textarea-field">
    <AddText tag="label" :for="id" class="ml-label"> {{ label }} </AddText>

    <AddTextarea 
      :id="id"
      :classes="classes" 
      :name="name" 
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      />
    
  </div>
</template>