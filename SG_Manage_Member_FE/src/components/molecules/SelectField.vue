<script setup lang="ts">
  import { defineProps, PropType } from 'vue';

  import AddSelect, {OptionTypes} from '../atoms/AddSelect.vue';
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
  modelValue: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  options: {
    type: Array as PropType<OptionTypes[]>,
    required: true,
    default: [],
  },
})

</script>

<template>
  <div class="ml-textarea-field">
    <AddText tag="label" :for="id" class="ml-label"> {{ label }} </AddText>

    <AddSelect 
      :id="id"
      :classes="classes" 
      :name="name" 
      :value="modelValue" 
      :options="options"
      @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)"
      >

      </AddSelect>
    
  </div>
</template>