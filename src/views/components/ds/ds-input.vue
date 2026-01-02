<template>
  <div class="flex flex-col gap-1 relative">
    <label class="input static outline-0 w-full" :class="[required && 'validator']">
      <input
        v-model="input"
        ref="inputed"
        :id
        :type
        :required
        class="w-full text-sm peer placeholder-shown:pt-0 transition-all [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder=""
        :max
      />

      <span
        class="text-sm text-gray-500 absolute left-0 -top-5 px-0.5 pointer-events-none peer-placeholder-shown:left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm transition-all"
        >{{ label }}
      </span>
    </label>
    <slot>
      <div class="validator-hint hidden mt-0 pb-2">{{ errorMessage }}</div>
    </slot>
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue'

const input = defineModel({ default: null })
const r = useTemplateRef('inputed')

defineProps({
  id: {
    type: String,
    default: null,
  },
  errorMessage: {
    type: String,
  },
  type: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    default: null,
  },
})

onMounted(() => {
  console.log(r.value.setCustomValidity(''))
})
</script>
