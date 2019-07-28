import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './pages/home-page/home-page.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'template/create', component: CreatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
