import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from '../hello/hello.component';



@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [HelloComponent]
})
export class LazyModule {
  static entry = HelloComponent;
}
