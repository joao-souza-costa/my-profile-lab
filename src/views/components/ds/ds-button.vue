<template>
  <button :type class="btn w-full mt-4">
    <span v-if="loading" class="hidden loading loading-spinner" />
    <span v-else>
      <slot>
        {{ label }}
      </slot>
    </span>
  </button>
</template>

<script setup>
defineProps({
  loading: {
    default: false,
    type: Boolean,
  },
  label: {
    type: String,
    required: false,
  },
  type: {
    default: 'button',
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
