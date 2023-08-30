import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'main', component: MainComponent },
]

@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [
    SidebarComponent
  ]
})

export class LayoutModule { }
