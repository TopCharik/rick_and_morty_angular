import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, fromEvent, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('input', {static: true}) input!: ElementRef;
  @Output() inputEmit = new EventEmitter<string>();
  sub!: Subscription;
  constructor() { }

  ngAfterViewInit() {
    this.sub = fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.inputEmit.emit(this.input.nativeElement.value)),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
