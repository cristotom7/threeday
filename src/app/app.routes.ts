import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Contact } from './pages/contact/contact';
import { Home } from './home/home';


export const routes: Routes = [
  
  { path: 'home', component: Home },
  { path: 'ContactUs', component:Contact},
  { path: 'AboutUs', component: About },
  { path: 'Service', component: Service},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }