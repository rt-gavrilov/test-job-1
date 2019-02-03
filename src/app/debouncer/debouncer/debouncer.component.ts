import {Component} from '@angular/core';
import {debounce} from '../debouncer';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'app-debouncer',
  templateUrl: './debouncer.component.html',
  styleUrls: ['./debouncer.component.scss']
})
export class DebouncerComponent {

  public timeout = 1000;

  public callLog: Date[] = [];

  private debouncer;

  constructor() {
    this.resetDebouncer();
  }

  public callFunction() {
    this.debouncer(new Date(), 'asfd', 'фыва');
  }

  public clearLog() {
    this.callLog = [];
  }

  public changeTimeout(event: MatSliderChange) {
    this.timeout = event.value;
    this.resetDebouncer();
  }

  private resetDebouncer() {
    this.debouncer = debounce(this.callee.bind(this), this.timeout);
  }

  private callee(timestamp: Date, ...args: any[]) {
    console.log(timestamp, ...args);
    this.callLog.push(timestamp);
  }
}
