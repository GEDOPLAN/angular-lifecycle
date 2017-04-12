import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  AfterViewChecked,
  AfterContentChecked,
  DoCheck,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Header } from '../models'

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.less']
})
export class BoxComponent implements OnInit,
  OnChanges, AfterContentInit, AfterViewInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck {

  @Output()
  onLifycleEvent: EventEmitter<string>;

  @Input()
  header: Header;

  constructor() {
    this.onLifycleEvent = new EventEmitter<string>();
    this.onLifycleEvent.emit('Method Call: constructor');
  }

  ngOnInit() {
    this.onLifycleEvent.emit('Method Call: ngOnInit');
  }

  ngOnChanges() {
    this.onLifycleEvent.emit('Method Call: ngOnChanges');
  }

  ngAfterContentInit() {
    this.onLifycleEvent.emit('Method Call: ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.onLifycleEvent.emit('Method Call: ngAfterViewInit');
  }

  ngOnDestroy() {
    this.onLifycleEvent.emit('Method Call: ngOnDestroy');

  }

  ngAfterViewChecked() {
    this.onLifycleEvent.emit('Method Call: ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    this.onLifycleEvent.emit('Method Call: ngAfterContentChecked');
  }

  ngDoCheck() {
    this.onLifycleEvent.emit('Method Call: ngDoCheck');
  }

}
