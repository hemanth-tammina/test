import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'sidenav', component:SidenavComponent
  },
  {
    path:'footer', component:FooterComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
