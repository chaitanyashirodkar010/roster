import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'account', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountModule)},
  { path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule)},
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
