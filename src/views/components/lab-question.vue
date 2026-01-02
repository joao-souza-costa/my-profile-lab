<template>
  <div class="min-h-72">
    <p class="mb-4 font-semibold">
      {{ props.question }}
    </p>
    <div class="flex flex-col gap-2" @input="handleInput">
      <label
        class="flex flex-row items-center gap-4 mb-2 pointer-fine:cursor-pointer"
        v-for="answer in props.options"
        :key="answer.value"
      >
        <input
          :value="answer.value"
          type="radio"
          name="radio"
          class="radio radio-neutral"
        />
        <span> {{ answer.label }} </span>
      </label>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['next']);

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  options: {
    /* 
      [                                            
        value: '124',
        label: 'label'
      ]    
    */
    type: Array,
    required: true,
  },
});

function handleInput(e) {
  emit('next', { value: e.target.value });
}
</script>
