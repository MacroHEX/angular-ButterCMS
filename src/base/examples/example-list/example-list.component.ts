import {Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {ArrayDataSubject} from "../../rx/array-data.subject";

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnDestroy {

  // ::: views
  //
  @ViewChild("list") protected table!: MatTable<any>;

  // ::: inputs
  //
  @Input("headers") withHeaders = true;
  @Input("content") content = []; // init data
  @Input("cols") columns = ["id", "name", "description"];

  // ::: outputs
  //
  @Output("action") protected emitter: EventEmitter<object> = new EventEmitter<object>();

  // ::: vars
  //
  dataSource = new MatTableDataSource();
  protected dataSubject = new ArrayDataSubject<any>(this.content);

  // ::: constructor
  //
  constructor(/*public appService: AppService*/) {
    this.dataSubject.subscribe(data => this.dataSource.data = data);
  }


  // ::: ng
  //
  ngOnDestroy() {
    this.dataSubject.unsubscribe();
  }

  // ::: api
  //
  getDataSubject() {
    return this.dataSubject;
  }

  // ::: ui
  //
  emit(eventName: string, data?: any, event?: any) {
    if (event) {
      event.stopPropagation();
    }
    this.emitter.emit({"name": eventName, "data": data});
  }
}
