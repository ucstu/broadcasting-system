<template>
  <Editor v-model:value="config" :options="{ toolbox }"/>
</template>

<script setup lang="ts">
import type { utils } from "blockly/core";
import defu from "defu";

const toolbox: utils.toolbox.ToolboxDefinition = defu(Toolbox, {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Control",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
      ],
    },
    {
      kind: "category",
      name: "Logic",
      contents: [
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
      ],
    },
  ],
});

const config = useLocalStorage("playConfig", {});
</script>
