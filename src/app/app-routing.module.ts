import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [

  {path:'',component:UserdetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
