<template>
  <div
    ref="wrapEl"
    :style="dynamicStyles"
    class="transition duration-300 relative border border-stone-700 background-gradient rounded-xl z-0 before:absolute before:inset-[-2px] before:rounded-[14px] before:z-[-1] hover:border-white"
  >
    <div :class="innerClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, unref, defineProps, withDefaults } from "vue";
import { useMouse, useElementBounding } from "@vueuse/core";

const props = withDefaults(
  defineProps<{ size?: number; innerClass?: string }>(),
  {
    size: 200,
    innerClass:
      "w-full h-full bg-stone-900/75 bg-gradient-to-b from-stone-900/75 to-stone-950/75 backdrop-blur-2xl rounded-xl",
  },
);
const wrapEl = ref<HTMLDivElement>();

const { x: mouseX, y: mouseY } = useMouse({ touch: false, type: "client" });
const { x: elX, y: elY } = useElementBounding(wrapEl);

const position = computed(() => {
  const gradientX = mouseX.value - elX.value;
  const gradientY = mouseY.value - elY.value;
  return {
    x: gradientX,
    y: gradientY,
  };
});

const dynamicStyles = computed(
  () => `
  --x: ${unref(position).x}px;
  --y: ${unref(position).y}px;
  --size: ${props.size}px;`,
);
</script>

<style>
.background-gradient,
.background-gradient::before {
  background: radial-gradient(
    var(--size) circle at var(--x) var(--y),
    theme("colors.white") 0,
    transparent 100%
  );
}
</style>
