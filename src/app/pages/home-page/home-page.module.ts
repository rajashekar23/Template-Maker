import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { EndComponent } from 'src/app/components/end/end.component';

@NgModule({
  declarations: [HomePageComponent, NavComponent, BannerComponent, EndComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
