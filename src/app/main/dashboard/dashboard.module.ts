import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from '../customers/customers.component';
import { MeetingsComponent } from '../meetings/meetings.component';
import { CustomersModule } from '../customers/customers.module';
import { MeetingsModule } from '../meetings/meetings.module';



@NgModule({
  declarations: [
    CustomersComponent,
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    CustomersModule,
    MeetingsModule
  ]
})
export class DashboardModule { }
