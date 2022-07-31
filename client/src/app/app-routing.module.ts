import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookidComponent } from './components/bookid/bookid.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'create', component:CreateComponent},
  {path:'bookid/:id',component:BookidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
