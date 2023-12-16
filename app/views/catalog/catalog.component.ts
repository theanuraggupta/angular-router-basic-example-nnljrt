import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <h1>Catalog</h1>
  `,
  templateUrl: 'catalog.component.html',
})
export class CatalogViewComponent implements OnInit {
  id: number;
  constructor(private routes: ActivatedRoute) {}
  ngOnInit() {
    this.routes.params.subscribe((params) => {
      this.id = params.id;
      console.log('params', params);
    });
  }
}
