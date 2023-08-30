import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TerminalMasterComponent } from './terminal-master/terminal-master.component';

const routes = [
    {path: 'terminal-master', component: TerminalMasterComponent},
]

@NgModule({
  declarations: [TerminalMasterComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MasterModule { }


