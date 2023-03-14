import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() message!: string;
  @Input() displayReturn!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.message = this.message ?? "Page not found";
    this.displayReturn = this.displayReturn ?? true;
  }

}
