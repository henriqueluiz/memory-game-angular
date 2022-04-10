import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './../header/header.module';
import { FooterModule } from './../footer/footer.module';
import { WithBackgroundComponent } from './with-background.component';



@NgModule({
  declarations: [
    WithBackgroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule
  ]
})
export class WithBackGroundModule { }
