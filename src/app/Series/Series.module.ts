import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './Series.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SeriesComponent],
  exports: [SeriesComponent]
})
export class SeriesModule { }
