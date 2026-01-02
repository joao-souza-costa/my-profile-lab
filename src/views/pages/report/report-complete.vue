<template>
  <!-- Header -->
  <div class="h-full flex flex-col gap-8 overflow-auto lg:overflow-visible">
    <!-- O que você verá -->

    <!-- Tríade Dominante -->
    <section class="space-y-4 py-2">
      <h2 class="text-2xl font-bold text-blue-600 text-center">Tríade Dominante: Razão</h2>

      <p class="text-justify">
        Seu funcionamento natural é guiado pela busca de clareza antes da ação, pela capacidade de
        estruturar informações de forma lógica e organizada e pela habilidade de observar padrões e
        relações entre fatos. As decisões são tomadas com base em uma análise cuidadosa, priorizando
        consistência, segurança e compreensão profunda dos cenários antes de qualquer movimento.
      </p>
      <div class="flex flex-row gap-4 justify-center">
        <div>
          <h3 class="font-semibold mt-4">Forças</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Excelente capacidade analítica</li>
            <li>Consistência nas decisões</li>
            <li>Visão clara de riscos e consequências</li>
            <li>Facilidade de organizar processos</li>
            <li>Comunicação objetiva e estruturada</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mt-4">Pontos de Atenção</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Tendência a demorar para decidir diante de incertezas</li>
            <li>Risco de racionalizar excessivamente situações humanas</li>
            <li>Pode soar distante emocionalmente</li>
            <li>Excesso de autocobrança intelectual</li>
            <li>Dificuldade com ambientes caóticos ou pouco claros</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tríade Secundária -->
    <section class="space-y-4 py-2">
      <h2 class="text-2xl font-bold text-purple-600 text-center">Tríade Secundária: Emoção</h2>
      <p class="text-justify">
        Sua forma de operar une uma lógica dominante a uma sensibilidade relacional, resultando em
        um perfil que analisa profundamente as situações sem deixar de considerar o impacto humano
        das decisões. Essa combinação favorece escolhas mais equilibradas, contribui para a
        construção de ambientes colaborativos e bem estruturados e facilita a condução de conversas
        difíceis de maneira ponderada e respeitosa.
      </p>
    </section>

    <!-- Tríade Menos Ativa -->
    <section class="space-y-4 py-2">
      <h2 class="text-2xl font-bold text-orange-600 text-center">Tríade Menos Ativa: Ação</h2>
      <p>
        A ação surge quando há segurança mental e emocional. Isso gera um ritmo cuidadoso,
        priorizando precisão em vez de velocidade.
      </p>
    </section>

    <!-- Comunicação -->
    <section class="space-y-4 bg-gray-50 rounded-xl p-6">
      <h2 class="text-2xl font-bold text-center">Estilo de Comunicação</h2>

      <p class="text-center"><strong>Estilo:</strong> racional, organizado e ponderado</p>

      <div class="flex flex-row gap-4 items-center justify-center">
        <ul class="list-disc pl-6 space-y-1">
          <li>Estrutura bem as ideias</li>
          <li>Explica raciocínios com clareza</li>
          <li>Prefere conversas objetivas</li>
          <li>Evita exageros emocionais</li>
        </ul>

        <div>
          <h3 class="font-semibold mt-4">Como os outros te percebem</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Confiável e equilibrado</li>
            <li>Alguém que pensa antes de agir</li>
            <li>Comunicador técnico e claro</li>
            <li>Profissional que transmite segurança</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Resumo -->
    <section class="space-y-3">
      <h2 class="text-2xl font-bold">Resumo Final do Seu Perfil</h2>
      <p><strong>Tríade Dominante:</strong> Razão — analítico, estruturado, lógico e consistente</p>
      <p><strong>Tríade Secundária:</strong> Emoção — sensível, colaborativo e cuidadoso</p>
      <p><strong>Tríade Menos Ativa:</strong> Ação — ritmo cuidadoso e foco em precisão</p>
    </section>

    <!-- Dica de Ouro -->
    <section class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
      <h2 class="text-xl font-bold mb-2">💡 Dica de Ouro</h2>
      <p>
        Utilize seus adjetivos-chave para construir sua autodescrição em currículos, entrevistas,
        redes sociais e apresentações profissionais. Evite respostas genéricas e transmita mais
        segurança e confiança.
      </p>
    </section>

    <section class="p-1"></section>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
