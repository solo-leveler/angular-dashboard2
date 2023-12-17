import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardRightService {
  private apiUrl = 'https://1.api.fy23ey06.careers.ifelsecloud.com';

  constructor(private http: HttpClient) { }

  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  formatCurrency(number:number) {
    if (isNaN(number)) {
      return 'Invalid input';
    }
    return number?.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
}
