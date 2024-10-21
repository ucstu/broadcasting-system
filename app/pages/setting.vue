<template>
  <NGrid x-gap="12" y-gap="12" :cols>
    <NGi>
      <NCard title="播音设置（默认）">
        <NForm label-placement="left">
          <NFormItem label="播音员">
            <NSelect
              v-model:value="speakConfig.speaker"
              :options="
                voices.map(({ name }) => ({ label: name, value: name }))
              "
              filterable
            />
          </NFormItem>
          <NFormItem label="播音速度">
            <NInputNumber v-model:value="speakConfig.speed" class="w-full" :step="0.5">
              <template #suffix>倍</template>
            </NInputNumber>
          </NFormItem>
          <NFormItem label="播音音量">
            <NSlider v-model:value="speakConfig.volume" />
          </NFormItem>
        </NForm>
      </NCard>
    </NGi>
    <NGi>
      <NCard title="音乐设置（默认）">
        <NForm label-placement="left">
          <NFormItem label="音乐来源">
            <NInput />
          </NFormItem>
          <NFormItem label="音乐音量">
            <NInput />
          </NFormItem>
        </NForm>
      </NCard>
    </NGi>
  </NGrid>
</template>

<script setup lang="ts">
const mobile = useMediaQuery("(max-width: 640px)");
const tablet = useMediaQuery("(max-width: 768px)");
const laptop = useMediaQuery("(max-width: 1024px)");

const cols = computed(() => {
  if (mobile.value) return 1;
  if (tablet.value) return 1;
  if (laptop.value) return 2;
  return 2;
});

const speakConfig = useLocalStorage("speakConfig", {
  speaker: "",
  speed: 1,
  volume: 100,
});

const voices = ref<Array<SpeechSynthesisVoice>>([]);
onMounted(() => (voices.value = window.speechSynthesis?.getVoices() ?? []));

const musicConfig = useLocalStorage("musicConfig", {
  source: "QQ音乐",
  volume: 50,
});
</script>
