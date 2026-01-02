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
  <router-view />
</template>

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
