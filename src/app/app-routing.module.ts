import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContractComponent } from './add-contract/add-contract.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "add", component: AddContractComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
