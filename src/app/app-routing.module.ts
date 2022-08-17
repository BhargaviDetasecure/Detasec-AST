import { Vunl3PageComponent } from './vunl3-page/vunl3-page.component';
import { Vunl4PageComponent } from './vunl4-page/vunl4-page.component';
import { Vuln2PageComponent } from './vuln2-page/vuln2-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultPageComponent } from './vuln1-page/result-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'vuln1', component:ResultPageComponent},
  {path:'vuln2', component:Vuln2PageComponent},
  {path:'vuln3', component:Vunl3PageComponent},
  {path:'vuln4', component:Vunl4PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
