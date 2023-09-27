import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-routing.module';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../components/components.module";




@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        ComponentsModule
    ]
})
export class AdminModule { }
