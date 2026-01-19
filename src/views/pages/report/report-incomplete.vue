<template>
  <section class="h-full flex flex-col gap-5 relative">
    <div>
      <h2 class="text-center text-lg font-semibold text-gray-800 mb-4">
        Perfil Comportamental: Razão
      </h2>

      <p class="text-gray-600text-base text-justify">
        Pessoas com perfil
        <span class="font-semibold text-violet-600">Razão</span>
        são altamente orientadas a resultados, com forte iniciativa e rapidez na tomada de decisão,
        destacando-se naturalmente em contextos de liderança. Seus principais pontos fortes incluem
        assertividade, objetividade e capacidade de execução. Como oportunidades de desenvolvimento,
        este perfil pode apresentar impaciência, menor abertura a opiniões divergentes e tendência a
        priorizar metas em detrimento de aspectos emocionais e relacionais.
      </p>
    </div>

    <div>
      <!-- Título -->
      <h1 class="text-lg text-center font-semibold text-gray-800 mb-4">
        Desbloqueie Agora Uma Análise<br />
        Profunda do seu perfil
      </h1>

      <div class="relative border-2 border-violet-500 rounded-xl p-4 bg-violet-50 flex gap-3">
        <!-- Conteúdo -->
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <h2 class="font-bold text-gray-900">Perfil aprofundado</h2>
            <span class="font-bold text-gray-900">R$ 14,00</span>
          </div>
          <p class="text-sm text-gray-600 mt-1">
            Conteúdo completo, recomendações e interpretações profundas
          </p>
        </div>
      </div>
    </div>

    <button
      @click="redirectToCompleteReport"
      type="button"
      class="btn btn-primary w-full mt-4 rounded-xl transition absolute bottom-0"
    >
      Aprofundar meu perfil
    </button>
  </section>
</template>

<script setup>
import { navigate } from '@/app/utils/navigate'

function redirectToCompleteReport() {
  navigate({ name: 'report-complete' })
}
</script>

<style lang="scss" scoped></style>
