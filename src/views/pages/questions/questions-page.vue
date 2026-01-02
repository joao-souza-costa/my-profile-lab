<template>
  <div class="h-full flex justify-center flex-col">
    <transition name="go" mode="out-in">
      <component
        :is="currentComponent"
        :question="currentQuestion?.question"
        :options="currentQuestion?.options"
        :key="currentQuestion?.id"
        :loading="loading"
        @next="updateAnswers"
        @submit="submit"
      />
    </transition>
  </div>
</template>

<script setup>
import { computed, inject, onBeforeMount, ref, shallowRef } from 'vue'
import labQuestion from '../../components/lab-question.vue'
import socialsContact from '../../components/socials-contact.vue'
import questionServices from '@/app/services/questionServices'
import { useRouter } from 'vue-router'

const progress = inject('progress')

const router = useRouter()

const answers = ref({})
const list = ref([])
const currentIndex = ref(0)
const loading = ref(false)

const currentQuestion = computed(() => {
  return list.value[currentIndex.value]
})

const currentComponent = shallowRef(null)

function updateAnswers({ value }) {
  answers.value[currentQuestion.value.id] = value
  currentIndex.value += 1
  !(currentIndex.value < list.value.length) && router.push({ name: 'personal-data' })

  updateProgress()
}

function updateProgress() {
  if (currentIndex.value === 0) {
    return progress.setProgress(0)
  }
  return progress.setProgress((100 / list.value.length) * currentIndex.value)
}

function findQuestions() {
  questionServices.findQuestions().then((r) => {
    list.value = r
    currentComponent.value = labQuestion
  })
}

onBeforeMount(() => {
  findQuestions()
})

function submit({ email }) {
  loading.value = true

  const payload = JSON.stringify({
    answers: answers.value,
    email: email,
  })

  questionServices
    .sendAnswers(payload)
    .then(() => {
      currentComponent.value = socialsContact
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<style>
progress::-webkit-progress-value {
  transition: width 0.4s ease;
}

progress::-moz-progress-bar {
  transition: width 0.4s ease;
}
</style>
