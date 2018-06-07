import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.css' ]
})

export class PaginationComponent implements OnInit {

   p: number = 1;
   //collection: any[] = someArrayOfThings;

  constructor() { }

  ngOnInit() {

  }


}
