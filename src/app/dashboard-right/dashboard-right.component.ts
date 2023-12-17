import { Component, OnInit } from '@angular/core';
import { DashboardRightService } from './dashboard-right.service';

@Component({
  selector: 'app-dashboard-right',
  templateUrl: './dashboard-right.component.html',
  styleUrls: ['./dashboard-right.component.scss'],
  providers : [DashboardRightService]
})
export class DashboardRightComponent implements OnInit {

  constructor(public dashboardService : DashboardRightService) { }
  dashboardObj : any;
  ngOnInit(): void {
    this.dashboardService.getRecords().subscribe(data => {
      console.log(data);
      this.dashboardObj = data;
    })
  }

}
