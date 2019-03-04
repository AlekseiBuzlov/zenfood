import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AutoUnsubscribe } from '@core/AutoUnsubscribe';
import { ConfigService } from './table-config';

@AutoUnsubscribe()
@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns?: string;
  @Input() data?: any[];
  @Output() onRowClick?: EventEmitter<any> = new EventEmitter<any>();

  public configuration: any;
  public clicked;

  public eventEmitted($event) {
    this.clicked = JSON.stringify($event, null, 2);
    this.onRowClick.emit($event);
  }

  constructor() {
    this.configuration = ConfigService.config;
  }
}