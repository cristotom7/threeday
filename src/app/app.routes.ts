<<<<<<< HEAD
import { Routes } from '@angular/router';
import { Card } from './card/card';
import { SingleListview } from './single-listview/single-listview';

export const routes: Routes = [
  { path:'card',component: Card},
  {path:'singleview-list/titleid',component:SingleListview}
];
=======
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
>>>>>>> 85f96380dc05ed69e1b2e66e31ab758713e45ad0
