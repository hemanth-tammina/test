import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutRoutes } from './admin/layout/admin-routing.module';
import { AdminModule } from './admin/layout/admin.module';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {
    path:"", redirectTo:"userlogin" ,pathMatch:"full"
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./admin/layout/admin.module').then(m=>m.AdminModule)
  }]},
  {
    path:"userlogin",component:UserLoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
