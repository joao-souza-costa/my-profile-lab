<template>
  <form class="min-h-72 flex flex-col gap-7" @submit.prevent="handleSubmit">
    <p class="font-semibold">Preencha os campos para finalizar a analise</p>

    <ds-input
      v-model="data.email"
      id="email"
      type="email"
      label="Email: "
      error-message="Digite um email válido "
      required
    />

    <ds-input
      v-model="data.age"
      id="age"
      type="number"
      label="Idade: "
      max="99"
      error-message="Digite uma idade válida"
      required
    />

    <div class="flex flex-col relative">
      <select v-model="data.gender" class="select peer outline-none w-full" required>
        <option v-for="gender in genderOptions" :key="gender.value">{{ gender.label }}</option>
      </select>

      <!--       peer-placeholder-shown: peer-placeholder-shown:.75 peer-placeholder-shown:
 -->
      <span
        class="text-sm text-gray-500 absolute left-0 -top-5 px-0.5 pointer-events-none transition-all"
        :class="[!data.gender && ' left-3 top-2.5 text-3xl']"
        >Gênero:
      </span>
    </div>

    <button type="submit" :disabled="loading" class="btn btn-success mt-4 w-full">
      <span v-if="loading" class="loading loading-spinner"></span>
      Finalizar
    </button>
  </form>
</template>

<script setup>
import DsInput from '@/views/components/ds/ds-input.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)

const data = reactive({
  email: null,
  age: null,
  gender: null,
})

const genderOptions = [
  { label: 'Homem Cisgênero', value: 1 },
  { label: 'Mulher Cisgênero', value: 2 },
  { label: 'Homem Transgênero', value: 3 },
  { label: 'Mulher Transgênero', value: 4 },
  { label: 'Não binário', value: 5 },
  { label: 'Agênero', value: 6 },
  { label: 'Gênero fluido', value: 7 },
  { label: 'Prefiro não responder', value: 8 },
]

function handleSubmit() {
  router.push({ name: 'report-incomplete' })
}
</script>
