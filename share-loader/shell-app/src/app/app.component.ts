import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FeatureRegistry } from './feature-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private featureRegistry: FeatureRegistry) {
    featureRegistry.loadFeature('http://localhost:4300/main.js');
    setTimeout(async () => {
      featureRegistry.renderModule('lazy', this.container)

    }, 2000);
  }

  message = 'This is the sample message.';
}
