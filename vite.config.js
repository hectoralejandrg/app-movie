import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  const newEnv = (env) => {
    return Object.keys(env).reduce((prev, key) => {
      prev[`process.env.${key}`] = JSON.stringify(env[key]);
      return prev;
    }, {});
  };
  return defineConfig({
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      quasar({ sassVariables: "src/quasar-variables.sass" }),
    ],
    define: {
      ...newEnv(env)
    }
  });
};
