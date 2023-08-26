import fs from 'fs-extra';
import { manifest } from './src/manifest';

export const Reset = '\x1b[0m';
export const FgBlack = '\x1b[30m';
export const FgRed = '\x1b[31m';
export const FgGreen = '\x1b[32m';
export const FgYellow = '\x1b[33m';
export const FgBlue = '\x1b[34m';
export const FgMagenta = '\x1b[35m';
export const FgCyan = '\x1b[36m';
export const FgWhite = '\x1b[37m';
export const FgGray = '\x1b[90m';

export function clearDistPlugin() {
  return {
    name: 'clear-dist',
    setup({ onStart, initialOptions }) {
      onStart(() => {
        if (!fs.existsSync(initialOptions.outdir)) return;
        fs.emptyDirSync(initialOptions.outdir);
        logger(`outdir (${initialOptions.outdir}) ${FgGreen}[cleared]${Reset}`);
      });
    },
  };
}

export function copyImagePlugin() {
  return {
    name: 'copy-images',
    setup({ onEnd, initialOptions }) {
      onEnd(() => {
        fs.copySync('src/images', `${initialOptions.outdir}/images`);
        logger(`images ${FgGreen}[copied]${Reset}`);
      });
    },
  };
}

export function manifestPlugin() {
  return {
    name: 'manifest',
    setup({ onEnd, initialOptions }) {
      onEnd(() => {
        fs.writeFileSync(`${initialOptions.outdir}/manifest.json`, JSON.stringify(manifest));
        logger(`manifest.json ${FgGreen}[created]${Reset}`);
      });
    },
  };
}

export function loggerPlugin() {
  return {
    name: 'logger',
    setup({ onEnd }) {
      onEnd(() => {
        logger(`build ${FgGreen}[completed]${Reset}`);
      });
    },
  };
}

function logger(msg: string) {
  const date = new Date();
  const time = date.toLocaleTimeString().split(' ')[0];
  console.log(`${FgGreen}[esbuild]${Reset} ${FgGray}[${time}]${Reset} ${msg}`);
}
