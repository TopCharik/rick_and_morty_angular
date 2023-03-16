import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { PagerComponent } from './components/pager/pager.component';
import {RouterLinkWithHref} from "@angular/router";
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModelContainerComponent } from './components/model-container/model-container.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';



@NgModule({
    declarations: [
        NotFoundComponent,
        InputFilterComponent,
        PagerComponent,
        NotFoundPageComponent,
        LoadingComponent,
        ModelContainerComponent,
        ReturnButtonComponent
    ],
  exports: [
    InputFilterComponent,
    PagerComponent,
    NotFoundComponent,
    LoadingComponent,
    ReturnButtonComponent,
    ModelContainerComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ]
})
export class SharedModule { }
