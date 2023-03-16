import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.css']
})
export class ReturnButtonComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onReturn() {
    this.location.back();
  }
}
