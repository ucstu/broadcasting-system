<template>
  <NLayout :has-sider="!tablet" class="w-full h-full">
    <NLayoutSider v-if="!tablet" bordered>
      <NFlex align="center" justify="center">
        <NuxtImg src="/favicon.png" placeholder width="36" />
        <NH2 class="my-4">智能广播系统</NH2>
      </NFlex>
      <NMenu :value="$route.path" :options />
    </NLayoutSider>
    <NLayoutHeader v-else bordered>
      <NFlex align="center" class="px-4" justify="space-between">
        <NFlex align="center">
          <NuxtImg src="/favicon.png" placeholder width="36" />
          <NH2 class="my-2">智能广播系统</NH2>
        </NFlex>
        <NButton text size="large" @click="show = !show">
          <Icon :name="show ? 'material-symbols:menu-open' : 'material-symbols:menu'" size="28"/>
        </NButton>
      </NFlex>
      <NDrawer v-model:show="show" width="100%" placement="right">
        <NDrawerContent title="智能广播系统" closable>
          <NMenu :value="$route.path" :options />
        </NDrawerContent>
      </NDrawer>
    </NLayoutHeader>
    <NLayoutContent>
      <slot />
    </NLayoutContent>
  </NLayout>
</template>

<script lang="tsx" setup>
import { Icon, NuxtLink } from "#components";
import type { MenuOption } from "naive-ui";
const options = ref<Array<MenuOption>>([
  {
    key: "/",
    label() {
      return <NuxtLink href="/">智能广播</NuxtLink>;
    },
    icon() {
      return <Icon name="material-symbols:volume-up" />;
    },
  },
  {
    key: "/setting",
    label() {
      return <NuxtLink href="/setting">系统设置</NuxtLink>;
    },
    icon() {
      return <Icon name="material-symbols:settings" />;
    },
  },
]);

const show = ref(false);
const router = useRouter();
const tablet = useMediaQuery("(max-width: 768px)");
watch(() => router.currentRoute.value.path, () => show.value = false);
</script>
