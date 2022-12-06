import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMeetingsComponent } from './create-meetings/create-meetings.component';
import { UpdateMeetingsComponent } from './update-meetings/update-meetings.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MeetingsComponent } from './meetings.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateMeetingsComponent,
    UpdateMeetingsComponent,
    ViewMeetingsComponent,
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CreateMeetingsComponent,
    UpdateMeetingsComponent,
    ViewMeetingsComponent,
    MeetingsComponent
  ]
})
export class MeetingsModule { }
