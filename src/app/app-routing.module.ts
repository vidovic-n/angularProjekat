import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { ExampleComponent } from './example/example.component';

import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'login', component: LoginComponent},
	{path: 'registration', component: RegistrationComponent},
	{path: 'menu', component: MenuComponent, canActivate: [AuthguardService]},
	{path: 'example', component: ExampleComponent, canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
