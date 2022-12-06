import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  closeResult = '';
  selectedId!: number;
  selectedDate = '';
  selectedTime = '';
  selectedEmail = '';
  selectedDescription = '';

  public meetingsList:{
    meetingid: number,
    date: string,
    time: string,
    email: string,
    description: string
  }[]=[];

  constructor(private _api: ApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this._api.getTypeRequest('meeting/get').subscribe((res: any) => {
      if(res.status){
        console.log(res);
        this.meetingsList = res.data;
      } else {
        console.log(res);
        alert(res);
      }
    })
  }

  openCreateMeeting(createMeeting: any){
    this.modalService.open(createMeeting, {size: "xl"});
  }

  openUpdateMeeting(updateMeeting: any, meetingid: number, date: string, time: string, email: string, description: string){
    this.modalService.open(updateMeeting, {size: "xl"});
    this.selectedId = meetingid;
    this.selectedDate = date;
    this.selectedTime = time;
    this.selectedEmail = email;
    this.selectedDescription = description;
  }
}