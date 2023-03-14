import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, fromEvent, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements OnInit, OnDestroy {
  @ViewChild('input', {static: true}) input!: ElementRef;
  @Input() initText?: string;
  @Input() debounceTime?: number;
  @Output() inputEmit = new EventEmitter<string>();

  sub!: Subscription;
  constructor() { }

  ngOnInit(): void {
    if (this.initText) {
      this.input.nativeElement.value = this.initText;
    }

    this.sub = fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(this.debounceTime ?? 500),
        distinctUntilChanged(),
        tap(() => this.inputEmit.emit(this.input.nativeElement.value)),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onReset() {
    this.input.nativeElement.value = "";
    this.inputEmit.emit('');
  }
}
