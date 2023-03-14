import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() message!: string;
  @Input() returnPath?: string;
  @Input() displayBanner!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.message = this.message ?? "Not found";
    this.displayBanner = this.displayBanner ?? false;
  }

}
