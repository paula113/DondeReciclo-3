import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterForm } from './register.form';
import { LoginForm } from './login.form';
import { ReportForm } from './report.form';
import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserPage
      },
      {
        path: 'ingresar',
        component: LoginForm
      },
      {
        path: 'reportar',
        component: ReportForm
      },
      {
        path: ':nuevo',
        component: RegisterForm
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
