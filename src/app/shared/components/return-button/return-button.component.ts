import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.css']
})
export class ReturnButtonComponent implements OnInit {
  @Input() canReturn = false;

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onReturn() {
    if (this.canReturn){
      this.location.back();
    }
    else {
      this.router.navigate(['/']);
    }
  }

}
