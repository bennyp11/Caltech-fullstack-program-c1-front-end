import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import Validation from '../../../utils/validation';

@Component({
  selector: 'app-create-meetings',
  templateUrl: './create-meetings.component.html',
  styleUrls: ['./create-meetings.component.css']
})
export class CreateMeetingsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    status: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl('')
  });
  submitted = false;
  modalOpen = false;

  public meetingsList:{
    meetingid: number,
    status: string,
    date: string,
    time: string,
    email: string,
    description: string
  }[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private _api: ApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      status: ['Confirmed'],
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

  onSubmit(modalOpen: boolean): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value.status)

    this._api.postTypeRequest('meeting/create', this.form.value).subscribe((res: any) => {
      if (res.status) { 
        window.location.reload();
      } else { 
        console.log(res)
        alert(res.msg)
      }
    });
  }
}
