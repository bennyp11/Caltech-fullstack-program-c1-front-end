import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  closeResult = '';
  selectedId!: number;
  selectedCompany = '';
  selectedEmail = '';

  public customersList:{
    customerid: number,
    company: string,
    email: string
  }[] = [];

  constructor(private _api: ApiService, private modalService: NgbModal) { }

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

  openCreateCustomer(createCustomer: any){
    this.modalService.open(createCustomer, {size: "xl"});
  }

  openUpdateCustomer(updateCustomer: any, customerid: number, company: any, email: any){
    this.modalService.open(updateCustomer, {size: "xl"});
    this.selectedId = customerid;
    this.selectedCompany = company;
    this.selectedEmail = email;
  }
}
