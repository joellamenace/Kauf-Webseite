import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path:'', redirectTo:'page-not-found', pathMatch:'full'}
]

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
