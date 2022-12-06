import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { CreateCustomersComponent } from './main/customers/create-customers/create-customers.component';
import { UpdateCustomersComponent } from './main/customers/update-customers/update-customers.component';
import { ViewCustomersComponent } from './main/customers/view-customers/view-customers.component';
import { CreateMeetingsComponent } from './main/meetings/create-meetings/create-meetings.component';
import { UpdateMeetingsComponent } from './main/meetings/update-meetings/update-meetings.component';
import { ViewMeetingsComponent } from './main/meetings/view-meetings/view-meetings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MeetingsComponent } from './main/meetings/meetings.component';
import { CustomersComponent } from './main/customers/customers.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'auth', children :[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]},
  {path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
  {path: 'meetings', canActivate: [AuthGuardService], children :[
    {path: '', component: MeetingsComponent},
    {path: 'create-meetings', component: CreateMeetingsComponent},
    {path: 'update-meetings', component: UpdateMeetingsComponent},
    {path: 'view-meetings', component: ViewMeetingsComponent},
  ]},
  {path: 'customers', canActivate: [AuthGuardService], children :[
    {path: '', component: CustomersComponent},
    {path: 'create-customers', component: CreateCustomersComponent},
    {path: 'update-customers', component: UpdateCustomersComponent},
    {path: 'view-customers', component: ViewCustomersComponent},
  ]},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
