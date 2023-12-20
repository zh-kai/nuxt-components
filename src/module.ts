import {
  defineNuxtModule,
  installModule,
  addPlugin,
  addComponentsDir,
  createResolver,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");

    installModule("@nuxtjs/tailwindcss", {
      exposeConfig: true,
      config: {
        darkMode: "class",
        content: {
          files: [resolve(runtimeDir, "components/**/*.{vue,mjs,ts}")],
          transform: {
            vue: (content: string) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, " ");
            },
          },
        },
      },
    });
    installModule("@vueuse/nuxt");

    // plugins
    addPlugin({ src: resolve(runtimeDir, "plugin") });

    // components
    addComponentsDir({ path: resolve(runtimeDir, "components") });
  },
});
