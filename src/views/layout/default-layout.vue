<template>
  <progress
    v-if="route.name === 'questions'"
    class="progress progress-primary absolute left-0 top-0 w-full"
    :value="progress"
    max="100"
  />

  <div class="h-full w-full">
    <div
      id="container"
      class="h-full max-w-5/6 lg:max-w-1/2 py-8 flex items-center lg:justify-center"
    >
      <router-view #="{ Component }">
        <transition name="go" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const progress = ref(0)

function setProgress(v) {
  progress.value = v
}
provide('progress', { progress, setProgress })
</script>

<style>
#container {
  margin: 0 auto;
}
</style>
