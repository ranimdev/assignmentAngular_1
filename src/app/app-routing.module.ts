import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home", component:HomeComponent , title:"home page"},
  {path:"portfolio",component:PortfolioComponent , title:"portfolio page"},
  {path:"about",component:AboutComponent , title:"about page"},
  {path:"contact",component:ContactComponent , title:"contact page"},

  
  {path:"**",component:NotFoundComponent , title:"not found 404"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
