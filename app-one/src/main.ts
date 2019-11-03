import { enableProdMode } from "@angular/core";
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from "./environments/environment";
import { LazyModule } from "./app/lazy/lazy.module";
const featureRegistry: any = (window as any).featureRegistry;
console.log("I'm here!", featureRegistry);

if (featureRegistry) {
  featureRegistry.register("lazy", LazyModule);
}

// platformBrowserDynamic().bootstrapModule(LazyModule)
//   .catch(err => console.error(err));
