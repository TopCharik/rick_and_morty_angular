import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.css']
})
export class ReturnButtonComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  onReturn() {
    if (this.isPreviousUrlInApp()) {
      console.log(window.history);
    } else {
      this.router.navigate(['/']);
    }
  }

  private isPreviousUrlInApp(): boolean {
    const previousUrlIndex = window.history.state.navigationId - 2;
    const previousUrl = (window.history as any)[previousUrlIndex];
    return previousUrl && previousUrl.startsWith(window.location.origin);
  }
}
