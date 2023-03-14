import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { PagerComponent } from './components/pager/pager.component';
import {RouterLinkWithHref} from "@angular/router";
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';



@NgModule({
    declarations: [
        NotFoundComponent,
        InputFilterComponent,
        PagerComponent,
        NotFoundPageComponent
    ],
    exports: [
        InputFilterComponent,
        PagerComponent,
        NotFoundComponent
    ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ]
})
export class SharedModule { }
