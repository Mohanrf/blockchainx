import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { PuppeteerLaunchOptions } from 'puppeteer';

const chromiumPath = '/usr/bin/chromium'; // Path to Chromium executable

const puppeteerLaunchOptions: PuppeteerLaunchOptions = {
  executablePath: chromiumPath,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
};

setPluginConfig('md', { puppeteerLaunchOptions }); // Set the Puppeteer launch options for the 'md' plugin

export const config: ScullyConfig = {
  projectRoot: './src',
  //projectName: 'Bx',
  distFolder: './dist/blockchainx', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for Scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
