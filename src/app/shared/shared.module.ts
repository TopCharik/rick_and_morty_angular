import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { PagerComponent } from './components/pager/pager.component';



@NgModule({
    declarations: [
        NotFoundComponent,
        InputFilterComponent,
        PagerComponent
    ],
    exports: [
        InputFilterComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
