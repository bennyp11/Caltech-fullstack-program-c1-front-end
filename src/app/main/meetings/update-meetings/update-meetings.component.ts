import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-meetings',
  templateUrl: './update-meetings.component.html',
  styleUrls: ['./update-meetings.component.css']
})
export class UpdateMeetingsComponent implements OnInit {

  @Input()
  selectedId!: number;
  @Input()
  selectedStatus!: string;
  @Input()
  selectedDate!: string;
  @Input()
  selectedTime!: string;
  @Input()
  selectedEmail!: string;
  @Input()
  selectedDescription!: string;

  form: FormGroup = new FormGroup({
    meetingid: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl('')
  });
  submitted = false;

  public meetingsList:{
    meetingid: number,
    status: string,
    date: string,
    time: string,
    email: string,
    description: string
  }[]=[];

  constructor(private _api: ApiService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      status: ['', Validators.maxLength(15)],
      date: [
        '', [
          Validators.required,
          Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)
        ]
      ],
      time: [
        '', [
          Validators.required,
          Validators.pattern('([01]?[0-9]|2[0-3]):[0-5][0-9]')
        ]
      ],
      email: [
        '', [
          Validators.required,
          Validators.email
        ]
      ],
      description: [
        '', [
          Validators.required,
          Validators.minLength(30)
        ]
      ]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(){
    this.form.value.meetingid = this.selectedId;
   this._api.putTypeRequest('meeting/update', this.form.value).subscribe((res: any) => {
        window.location.reload();
    });
  };

}
