import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  template: `<app-customers></app-customers><app-meetings></app-meetings>`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public protectedData: any
  public loading: boolean = false

  constructor(
    private _api: ApiService, 
    
  ) { }

  ngOnInit(): void {

    
    this._api.getTypeRequest('dashboard/dashboard').subscribe((res: any) => {
      this.protectedData = res
    });

  }



}