import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  item = [];
  constructor() { }

  addToChart(product) {
    this.item.push(product);
  }

  getItems() {
    return this.item;
  }

  clearChartItems() {
    this.item = [];
    return this.item;
  }

}