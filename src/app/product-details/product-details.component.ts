import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  private product;

  constructor(private route: ActivatedRoute,
              private chartSvc: ChartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
    });
  }

  addToChart(product) {
    this.chartSvc.addToChart(product);
    console.log('Chart', this.chartSvc.getItems());
  }

}