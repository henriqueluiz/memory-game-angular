import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubIconModule } from '@icons/github/github.module';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    GithubIconModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
