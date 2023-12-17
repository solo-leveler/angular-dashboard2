import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-left',
  templateUrl: './dashboard-left.component.html',
  styleUrls: ['./dashboard-left.component.scss']
})
export class DashboardLeftComponent implements OnInit {

  constructor(
    library: FaIconLibrary
  ) {
   library.addIconPacks(fas, far,fab);
  }

  ngOnInit(): void {
  }

}
