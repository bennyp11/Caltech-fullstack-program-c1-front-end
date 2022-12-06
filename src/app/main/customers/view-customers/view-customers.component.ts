import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  
  public customersList:{
    customerid: number,
    company: string,
    email: string
  }[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getTypeRequest('customer/get').subscribe((res: any) => {
      if(res.status){
        this.customersList = res.data;
      } else {
        console.log(res);
        alert(res);
      }
    })
  }

}
