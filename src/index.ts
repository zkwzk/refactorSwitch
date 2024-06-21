import { startApp } from './app';

// Entry point of the application
async function main() {
  try {
    await startApp();
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

main();