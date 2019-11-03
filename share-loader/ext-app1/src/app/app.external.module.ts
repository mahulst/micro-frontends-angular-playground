import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {appStates} from './app.states'
import {AppCommonModule} from "./app.common.module";
import { ExtComponent } from './ext.component';
@NgModule({
  imports: [AppCommonModule, CommonModule, RouterModule.forChild(appStates)],
  declarations: [],
  bootstrap: [],
  entryComponents: [ExtComponent],
  providers: [],
  exports: [RouterModule]
})

export class AppModule {
  static entry = ExtComponent;
}
debugger;
const featureRegistry: any = (window as any).featureRegistry;
console.log("I'm here!", featureRegistry);

if (featureRegistry) {
  featureRegistry.register("lazy", AppModule);
}
