import { Component, ViewChild, ContentChild } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { DummyTextComponent } from './dummy-text/dummy-text.component';
import { Header } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BoxComponent, DummyTextComponent]
})
export class AppComponent {

  logs: string[] = []
  appLogs: string[] = []
  childLogs: string[] = []

  header: Header;


  changeHeader() {
    this.header = {
      text: 'MyNewHeader',
      subText: '...'
    }
  }

  @ViewChild(DummyTextComponent)
  vChild: DummyTextComponent;

  @ContentChild(DummyTextComponent)
  cChild: DummyTextComponent

  changeHeaderText() {
    this.header.text = this.header.text + "*new*";
  }


  boxEvent(event) {
    this.logs.push(event);
  }

  constructor() {
    this.childLogs.push(`constructor: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.header = {
      text: 'MyHeader',
      subText: '...'
    }

    this.appLogs.push('Method Call: constructor');
  }

  ngOnInit() {
    this.childLogs.push(`ngOnInit: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngOnInit');
  }

  ngOnChanges() {
    this.childLogs.push(`ngOnChanges: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngOnChanges');
  }

  ngAfterContentInit() {
    this.childLogs.push(`ngAfterContentInit: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.childLogs.push(`ngAfterViewInit: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngAfterViewInit');
  }

  ngOnDestroy() {
    this.childLogs.push(`ngOnDestroy: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngOnDestroy');

  }

  ngAfterViewChecked() {
    this.childLogs.push(`ngAfterViewChecked: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    this.childLogs.push(`ngAfterContentChecked: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngAfterContentChecked');
  }

  ngDoCheck() {
    this.childLogs.push(`ngDoCheck: ViewChildren ${this.vChild}, ContentChildren ${this.cChild}`)
    this.appLogs.push('Method Call: ngDoCheck');
  }
}
