import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { M1Component } from '../../m1/m1.component';
import { M2Component } from '../../m2/m2.component';
import { M3Component } from '../../m3/m3.component';

export const AdminLayoutRoutes: Routes = [

    {
      path:'dashboard', component : DashboardComponent
    },
    {
      path:'m1', component : M1Component
    },
    {
      path:'m2', component : M2Component
    },
    {
      path:'m3', component : M3Component
    }

];

// @NgModule({
//   imports: [RouterModule.forChild(AdminLayoutRoutes)],
//   exports: [RouterModule]
// })
// export class AdminRoutingModule { }
