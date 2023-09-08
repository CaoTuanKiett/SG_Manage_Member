<script setup lang="ts">
  import { reactive, PropType } from 'vue';

  import AddInput from '../atoms/AddInput.vue';
  import AddIcon from '../atoms/AddIcon.vue';

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
  classesIcon: {
    type: String,
    required: true,
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
    <AddIcon 
      :classesIcon="classesIcon"
    />

    <AddInput 
      :id="id"
      :type="type"
      :classes="classes" 
      :name="name" 
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      />
    
  </div>
</template>