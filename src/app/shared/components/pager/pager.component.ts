import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  @Input() hasPrevPage!: boolean;
  @Input() hasNextPage!: boolean;
  @Output() prevPage = new EventEmitter();
  @Output() nextPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
