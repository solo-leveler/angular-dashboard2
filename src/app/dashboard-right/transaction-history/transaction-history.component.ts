import { Component, Input, OnInit } from '@angular/core';
import { DashboardRightService } from '../dashboard-right.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  @Input() dataSource : any
  constructor(public dashboardService : DashboardRightService) { }
  displayedColumns: string[] = ['date', 'amount', 'status', 'type','name'];
  ngOnInit(): void {
  }

}
