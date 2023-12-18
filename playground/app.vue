<template>
  <div class="p-6">
    <h1 class="text-lg font-semibold"># Frame Animation Test</h1>

    <div
      v-for="collectioins in [
        dog,
        kitten,
        bunny,
        fox,
        turtle,
        panda,
        dude,
        owlet,
        crab,
      ]"
      class="flex items-center gap-6"
    >
      <FrameAnimation
        v-for="(item, index) in collectioins"
        :key="index"
        :width="width"
        :steps="item.steps"
        :imageUrl="item.src"
        :frames="10"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const width = 100;
const dog = [
  { steps: 8, src: "/images/corgi/sniff&walk.png" },
  { steps: 8, src: "/images/corgi/run.png" },
  { steps: 5, src: "/images/corgi/walk.png" },
  { steps: 8, src: "/images/corgi/sniff.png" },
  { steps: 5, src: "/images/corgi/idle.png" },
  { steps: 6, src: "/images/corgi/sit.png" },
];

const kitten = [
  { steps: 4, src: "/images/kitten/run.png" },
  { steps: 8, src: "/images/kitten/walk.png" },
  { steps: 8, src: "/images/kitten/idle.png" },
  { steps: 24, src: "/images/kitten/sleep.png" },
];

const bunny = [
  { steps: 6, src: "/images/bunny/run.png" },
  { steps: 12, src: "/images/bunny/sit.png" },
  { steps: 4, src: "/images/bunny/idle.png" },
  { steps: 12, src: "/images/bunny/sleep.png" },
];

const turtle = [
  { steps: 5, src: "/images/turtle/walk.png" },
  { steps: 5, src: "/images/turtle/run.png" },
  { steps: 2, src: "/images/turtle/sit.png" },
];

const fox = [
  { steps: 8, src: "/images/fox/run.png" },
  { steps: 8, src: "/images/fox/sit.png" },
  { steps: 8, src: "/images/fox/idle.png" },
  { steps: 5, src: "/images/fox/sleep.png" },
];

const panda = [
  { steps: 4, src: "/images/panda/stand.png" },
  { steps: 8, src: "/images/panda/run.png" },
  { steps: 4, src: "/images/panda/sleep.png" },
  { steps: 6, src: "/images/panda/idle.png" },
  { steps: 10, src: "/images/panda/sit.png" },
];

const dude = [
  { steps: 6, src: "/images/dude/walk.png" },
  { steps: 6, src: "/images/dude/sleep.png" },
  { steps: 4, src: "/images/dude/idle.png" },
];

const owlet = [
  { steps: 6, src: "/images/owlet/walk.png" },
  { steps: 6, src: "/images/owlet/sleep.png" },
  { steps: 4, src: "/images/owlet/idle.png" },
];

const crab = [
  { steps: 6, src: "/images/crab/walk.png" },
  { steps: 6, src: "/images/crab/sleep.png" },
  { steps: 4, src: "/images/crab/idle.png" },
];
</script>
