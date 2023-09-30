import {Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {ArrayDataSubject} from "../../rx/array-data.subject";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-example-expandable-list',
  templateUrl: './example-expandable-list.component.html',
  styleUrls: ['./example-expandable-list.component.scss'],
  animations: [
    trigger('rowExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})
export class ExampleExpandableListComponent implements OnDestroy {

  // ::: views
  //
  @ViewChild("list") protected table!: MatTable<any>;

  // ::: inputs
  //
  @Input("headers") withHeaders = true;
  @Input("content") content = []; // init data
  @Input("cols") columns = ["rowExpandedToggler", "id", "name", "description"];
  // XXX Auto Add rowExpandedToggler

  // ::: outputs
  //
  @Output("action") protected emitter: EventEmitter<object> = new EventEmitter<object>();

  // ::: vars
  //
  dataSource = new MatTableDataSource();
  protected dataSubject = new ArrayDataSubject<any>(this.content);
  expandedItem: any;

  // ::: constructor
  //
  constructor(/*appService: ExampleAppService*/) {
    this.dataSubject.subscribe(data => this.dataSource.data = data);
  }

  // :::: ng
  //
  ngOnDestroy() {
    this.dataSubject.unsubscribe();
  }


  // ::: api
  //
  public getDataSubject() {
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

  toggleExpandedRow(element: any, event?: any) {
    if(event) {
      event.stopPropagation();
    }
    this.expandedItem = this.expandedItem === element ? null : element;
  }

}

