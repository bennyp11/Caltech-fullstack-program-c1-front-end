import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrls: ['./create-customers.component.css']
})
export class CreateCustomersComponent implements OnInit {

  constructor(
    private _api: ApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this._api.postTypeRequest('customer/create', form.value).subscribe((res: any) => {
      if (res.status) { 
        this._router.navigate(['customers/view-customers']);
      } else { 
        console.log(res)
        alert(res.msg)
      }
    });
    window.location.reload();
  }
}
