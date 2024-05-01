import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path:'', redirectTo:'home-page', pathMatch:'full'}
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
