import { Component } from '@angular/core';
import { customers } from '../customersData';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers = customers;
  currentPage = 1;
  pageSize = 10;
  totalPages = Math.ceil(this.customers.length / this.pageSize);
  pages: number[] = [];

  get customersForCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.customers.slice(startIndex, endIndex);
  }

  constructor() {
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }
}
