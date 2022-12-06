import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { UpdateCustomersComponent } from './update-customers/update-customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [
    CreateCustomersComponent,
    UpdateCustomersComponent,
    ViewCustomersComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CreateCustomersComponent,
    UpdateCustomersComponent,
    ViewCustomersComponent,
    CustomersComponent
  ]
})
export class CustomersModule { }
