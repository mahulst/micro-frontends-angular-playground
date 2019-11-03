import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.external.module';
console.log('123123123')
debugger;
try {
  const featureRegistry: any = (window as any).featureRegistry;
  console.log("I'm here!", featureRegistry);

  if (featureRegistry) {
    featureRegistry.register("lazy", AppModule);
  }
}
catch(e){
  console.log('ok')
}
