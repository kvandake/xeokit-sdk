import buildBaseConfig from "./rollup.base.config";

const input = process.env.INPUT;
const plugin = process.env.PLUGIN;

const baseConfig = buildBaseConfig(input, plugin);

export default {
  ...baseConfig,
  external: [
      'ct-xeokit-viewer',
      'ct-xeokit-shared-plugin-lib',
  ],
}