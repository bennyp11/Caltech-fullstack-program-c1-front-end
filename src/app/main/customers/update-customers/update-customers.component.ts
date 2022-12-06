import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {

  @Input()
  selectedId!: number;
  @Input()
  selectedCompany!: string;
  @Input()
  selectedEmail!: string;

  public customersList:{
    customerid: number,
    company: string,
    email: string
  }[] = [];

  constructor(
    private _api: ApiService,
    private _router: Router

  ) { }

  ngOnInit(): void {
  }

  onSave(form: NgForm){
   form.value.customerid = this.selectedId
    this._api.putTypeRequest('customer/update', form.value).subscribe((res: any) => {
        window.location.reload();
    });
  };
}
