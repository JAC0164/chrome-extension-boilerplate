import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import postCssPlugin from '@deanc/esbuild-plugin-postcss';
import autoprefixer from 'autoprefixer';
import esbuild from 'esbuild';
import tailwindcss from 'tailwindcss';
import { clearDistPlugin, copyImagePlugin, loggerPlugin, manifestPlugin } from './esbuild.plugin';

const pagesPath = [
  'src/pages/popup/index.tsx',
  'src/pages/options/index.tsx',
  'src/pages/newtab/index.tsx',
  'src/pages/devtools/index.ts',
  'src/pages/panel/index.tsx',
];

const scriptPath = ['src/scripts/background/index.ts', 'src/scripts/content/index.ts'];

const cssPath = ['src/styles/tailwind.css'];

esbuild
  .build({
    entryPoints: [...scriptPath, ...pagesPath, ...cssPath],
    outdir: 'dist',
    platform: 'browser',
    bundle: true,
    metafile: true,
    target: ['chrome80', 'firefox80', 'safari13', 'edge80'],
    sourcemap: process.env.NODE_ENV === 'development',
    minify: process.env.NODE_ENV !== 'development',
    plugins: [
      postCssPlugin({
        plugins: [tailwindcss, autoprefixer],
      }),
      htmlPlugin({
        files: pagesPath.map((path) => {
          const dirPath = path.split('/').slice(0, -1).join('/').replace('src/', '');
          return {
            entryPoints: [path],
            filename: `${dirPath}/index.html`,
            htmlTemplate: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link  href="../../styles/tailwind.css" rel="stylesheet">
          </head>
          <body>
          </body>
          </html>
      `
              .replace(/\s+/g, ' ')
              .trim(),
          };
        }),
      }),
      manifestPlugin(),
      copyImagePlugin(),
      loggerPlugin(),
      clearDistPlugin(),
    ],
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
