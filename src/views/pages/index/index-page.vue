<template>
  <div>
    <h3 class="text-center font-bold">MY PROFILE LAB</h3>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p class="">
        Este relatório foi desenvolvido para oferecer uma análise completa, objetiva e prática sobre
        o seu funcionamento natural como profissional. Ele se baseia na
        <strong class="font-semibold text-gray-900">metodologia das Tríades</strong>, que avalia a
        predominância do seu perfil nas três principais dimensões humanas:
      </p>

      <ol class="list-decimal list-inside space-y-2 pl-2">
        <li>
          <span class="font-medium text-gray-900">Pensar</span> —
          <span class="text-gray-600">Razão, lógica e análise</span>
        </li>
        <li>
          <span class="font-medium text-gray-900">Agir</span> —
          <span class="text-gray-600">Ação, iniciativa e execução</span>
        </li>
        <li>
          <span class="font-medium text-gray-900">Sentir</span> —
          <span class="text-gray-600">Emoção, empatia e percepção interpessoal</span>
        </li>
      </ol>

      <p class="">
        A partir desse mapeamento, o teste revela suas principais características profissionais de
        forma estruturada e direcionada, ajudando você a compreender melhor seus padrões de
        comportamento, fortalecer seu
        <strong class="font-semibold text-gray-900">autoconhecimento</strong> e desenvolver mais
        <strong class="font-semibold text-gray-900">autoconfiança</strong>
        no seu caminho profissional.
      </p>
    </div>

    <button type="button" @click="handleButton" class="btn btn-primary w-full mt-4">
      <span id="label"> Iniciar </span>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleButton() {
  router.push({ name: 'questions' })
}
</script>
