<script setup lang="ts">
  import { reactive, PropType } from 'vue';

  import AddInput from '../atoms/AddInput.vue';
  import AddText from '../atoms/AddText.vue';

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
  label: {
    type: String,
    required: false,
  },
})

</script>

<template>
  <div class="ml-textarea-field">
    
    <AddInput 
      :id="id"
      :type="type"
      :classes="classes" 
      :name="name" 
      :value="modelValue" 
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).checked)"
      />

      <AddText tag="label" :for="id" class="ml-label"> {{ label }} </AddText>
    
  </div>
</template>