import {NgModule} from '@angular/core';
import {DebouncerComponent} from './debouncer/debouncer.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {FlexLayoutModule} from '@angular/flex-layout';


const routes: Routes = [
  {path: '', component: DebouncerComponent},
];


@NgModule({
  declarations: [
    DebouncerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatSliderModule,
    FlexLayoutModule
  ]
})
export class DebouncerModule { }
