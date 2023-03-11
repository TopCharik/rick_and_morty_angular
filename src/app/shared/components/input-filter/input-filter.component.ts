import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, fromEvent, map, Subscription, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {mapRouteParamsToCharacterQuery} from "../../../characters/helpers/charactersMapper";

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('input', {static: true}) input!: ElementRef;
  @Output() inputEmit = new EventEmitter<string>();
  sub!: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      map(mapRouteParamsToCharacterQuery),
      tap(query => this.input.nativeElement.value = query.name ?? '')
    )
      .subscribe().unsubscribe();
  }

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
