import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const featureRegistry: any = (window as any).featureRegistry;
console.log("I'm here!", featureRegistry);

if (featureRegistry) {
  featureRegistry.register("lazy", AppModule);
}

// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
