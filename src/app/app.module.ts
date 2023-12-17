import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardRightComponent } from './dashboard-right/dashboard-right.component';
import { DashboardLeftComponent } from './dashboard-left/dashboard-left.component';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './dashboard-right/line-chart/line-chart.component';
import { BalanceComponent } from './dashboard-right/balance/balance.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TransactionHistoryComponent } from './dashboard-right/transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardRightComponent,
    DashboardLeftComponent,
    LineChartComponent,
    BalanceComponent,
    TransactionHistoryComponent
  ],
  imports: [
    NgApexchartsModule,
    BrowserModule,
    FontAwesomeModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
