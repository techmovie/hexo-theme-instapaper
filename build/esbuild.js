import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import glob from 'tiny-glob';
import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import pxtorem from 'postcss-pxtorem';

const cmd = process.argv.slice(2)[0];
const isDev = cmd === 'dev';
let bs = null;
if (isDev) {
  bs = browserSync.create();
  bs.init({
    proxy: 'http://localhost:4000',
  });
  bs.watch('./layout/**/*.pug').on('change', (e) => {
    bs.reload();
  });
}
(async () => {
  const entryPoints = await glob('./src/**/*.ts');
  esbuild.build({
    entryPoints: [...entryPoints, 'src/style/index.scss'],
    bundle: true,
    outdir: 'source',
    target: 'es2015',
    watch: isDev
      ? {
        onRebuild (error, result) {
          if (error) {
            console.error('watch build failed:', error);
          } else {
            bs.reload();
          }
        },
      }
      : false,
    minify: true,
    plugins: [
      sassPlugin({
        async transform (source, resolveDir) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv({ stage: 0 }),
            pxtorem({
              rootValue: 16,
              propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
            }),
          ]).process(source);
          return css;
        },
      }),
    ],
  });
})();
