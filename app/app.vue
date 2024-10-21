<script setup lang="ts">
useSeoMeta({
  title: "智能广播系统",
  description: "一个基于 Nuxt 的智能语音广播系统。",
});
</script>

<template>
  <NConfigProvider class="w-full h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>

<style lang="css">
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
