import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from '@angular/core';


@NgModule ({
    declarations: [],
    exports: [],
    imports: [
        CommonModule
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}