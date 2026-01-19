<template>
  <div class="flex flex-row bg-red-500 items-center text-white absolute w-full">
    ******

    <div class="mx-2 w-full overflow-hidden bg-red-500 py-1">
      <div
        class="whitespace-nowrap text-white text-sm font-semibold px-1"
        style="animation: marquee 12s linear infinite"
      >
        Você está em um ambiente de testes. As informações apresentadas não são definitivas
      </div>
    </div>
    ******
  </div>

  <div class="h-full">
    <progress
      v-if="currentComponent.name === 'questions'"
      class="progress progress-primary absolute left-0 top-0 w-full"
      :value="progress"
      max="100"
    />

    <div class="h-full w-full flex justify-center">
      <div
        id="container"
        class="h-full max-w-5/6 lg:max-w-1/2 py-8 flex items-center lg:justify-center"
      >
        <transition name="go" mode="out-in">
          <component :is="currentComponent.component" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import { currentComponent } from './app/utils/navigate'

const progress = ref(0)

function setProgress(v) {
  progress.value = v
}
provide('progress', { progress, setProgress })
</script>

<style>
.go-enter-active,
.go-leave-active {
  transition: all 0.25s ease-out;
}

.go-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.go-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.back-enter-active,
.back-leave-active {
  transition: all 0.25s ease-out;
}

.back-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.back-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
