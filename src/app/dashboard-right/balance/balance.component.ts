import { Component, Input, OnInit } from '@angular/core';
import { DashboardRightService } from '../dashboard-right.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  @Input() dashboardObj : any;
  constructor(public dashboardService : DashboardRightService) { }

  ngOnInit(): void {
  }

}
