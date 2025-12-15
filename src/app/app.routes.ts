import { Routes } from '@angular/router';
import { Card } from './card/card';
import { SingleListview } from './single-listview/single-listview';

export const routes: Routes = [
  { path:'card',component: Card},
  {path:'singleview-list/titleid',component:SingleListview}
];
