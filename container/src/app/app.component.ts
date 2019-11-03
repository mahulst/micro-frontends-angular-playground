import { Component } from "@angular/core";
import { FeatureRegistry } from "./feature-registry";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(featureRegistry: FeatureRegistry) {
    featureRegistry.loadFeature("http://localhost:8008/main.js");
  }
  title = "container";
}
