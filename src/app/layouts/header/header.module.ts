import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RefreshIconModule } from '@icons/refresh/refresh.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RefreshIconModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
