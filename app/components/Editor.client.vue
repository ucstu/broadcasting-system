<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Blockly } from '#imports';

const props = defineProps<{
  options: Blockly.BlocklyOptions;
}>();
const value = defineModel<{
  [key: string]: unknown;
}>("value");

const blocklyDiv = ref<HTMLDivElement>();
const workspace = shallowRef<Blockly.WorkspaceSvg>();

defineExpose({ workspace });

let skip = false;
onNuxtReady(() => {
  const options = props.options || {};
  options.trashcan ??= true;
  options.zoom ??= {};
  options.zoom.controls ??= true;
  workspace.value = Blockly.inject(blocklyDiv.value!, options);
  watchImmediate(
    value,
    (newValue) => {
      if (skip) {
        skip = false;
        return;
      }
      if (!newValue) return;
      if (!workspace.value) return;
      Blockly.serialization.workspaces.load(newValue, workspace.value);
    },
    { deep: true }
  );
  onUnmounted(
    workspace.value.addChangeListener(() => {
      skip = true;
      value.value = Blockly.serialization.workspaces.save(workspace.value!);
    })
  );
});
</script>

<template>
  <div ref="blocklyDiv" class="w-full h-full" />
</template>
