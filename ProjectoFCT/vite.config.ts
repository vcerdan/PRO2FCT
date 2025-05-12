import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  optimizeDeps: {
    exclude: [
      '@ionic/angular',
      '@ionic/core',
      'ion-app',
      'ion-item',
      'ion-button',
      'ion-header',
      'ion-content',
      'ion-toolbar'
      // Agrega todos los Ionic components que estés usando
    ]
  },
  ssr: {
    noExternal: [
      '@ionic/angular',
      '@ionic/core'
    ]
  },
  build: {
    target: 'esnext'
  }
});
