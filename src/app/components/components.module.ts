import { NgModule } from '@angular/core';
import { PreloaderComponent } from './preloader/preloader.component';

const pages = [PreloaderComponent]

@NgModule({
    declarations:[pages],
    imports:[],
    exports: [pages]
})
export class ComponentsModule {}