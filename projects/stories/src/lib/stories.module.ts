import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ReadmeComponent } from './readme/readme.component';


@NgModule({
    declarations: [
      ReadmeComponent,
    ],
    imports: [
        CommonModule,
    ],
    // services
    providers: [],
    exports: [
      ReadmeComponent
    ]
})
export class StoriesModule {
}
