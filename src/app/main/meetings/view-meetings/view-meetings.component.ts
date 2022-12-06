import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services/api.service';
import { UpdateMeetingsComponent } from '../update-meetings/update-meetings.component';

@Component({
  selector: 'app-view-meetings',
  templateUrl: './view-meetings.component.html',
  styleUrls: ['./view-meetings.component.css']
})
export class ViewMeetingsComponent implements OnInit {

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
}


