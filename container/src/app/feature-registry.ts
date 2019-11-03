import {
  Compiler,
  Injectable,
  Injector,
  NgModuleFactory,
  Type
} from "@angular/core";

@Injectable()
export class FeatureRegistry {
  constructor(private injector: Injector, private compiler: Compiler) {
    (window as any).featureRegistry = this;

    console.log("Registry loaded");
  }

  private features = new Map();
  private scriptCache = new Map();
  async register(
    name: string,
    ngModuleOrNgModuleFactory: NgModuleFactory<any> | Type<any>
  ) {
    console.log(`Register request for [${name}]`);

    let moduleFactory;
    if (ngModuleOrNgModuleFactory instanceof NgModuleFactory) {
      // aot mode
      moduleFactory = ngModuleOrNgModuleFactory;
    } else {
      // jit mode
      moduleFactory = await this.compiler.compileModuleAsync(
        ngModuleOrNgModuleFactory
      );
    }

    this.features.set(name, moduleFactory);

    console.log(`Registered feature [${name}]`);
  }

  async loadFeature(url: string) {
    if (!this.scriptCache.has(url)) {
      const promise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.onerror = event => reject(new Error(`Failed to load feature from [${url}]`));
        script.onload = resolve;
        script.async = true;
        script.src = url;

        if (document.currentScript) {
          document.currentScript.parentNode.insertBefore(
            script,
            document.currentScript
          );
        } else {
          (
            document.head || document.getElementsByTagName("head")[0]
          ).appendChild(script);
        }
      });

      this.scriptCache.set(url, promise);
    }
  }
}
