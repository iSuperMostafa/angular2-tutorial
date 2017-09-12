import { Component } from '@angular/core';

import  { LogService } from './log.service';
import  { DataService } from './data.service';


@Component({
    selector: 'si-cmp-a',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  providers: [LogService]
})
export class CmpAComponent {
    value = '';
    items: string[] = [];

    constructor (private logSerivce: LogService, private dataService: DataService) {}

    onLog(value: string) {
        this.logSerivce.writeToLog(value);
    }

    onStore(value: string) {
         this.dataService.setData(value);
    }

    onGet() {
        // for live update
        this.items = this.dataService.getData();
        // for refreshing the view
        // this.items = this.dataService.getData().slice(0);
    }

    onSend(value: string) {
   
    }
    
}
