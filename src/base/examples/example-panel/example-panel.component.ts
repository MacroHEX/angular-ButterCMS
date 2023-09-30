import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {APP_DTO, APP_PARENT} from "../../base.module";
import {ContentFrame} from "../../frames/api/content.frame";
import {ExampleExpandableListComponent} from "../example-expandable-list/example-expandable-list.component";

@Component({
  selector: 'app-example-panel',
  templateUrl: './example-panel.component.html',
  styleUrls: ['./example-panel.component.scss']
})
export class ExamplePanelComponent implements OnInit {

  // ::: vars
  //
  @ViewChild("list") listComponent!: ExampleExpandableListComponent;

  // ::: constructors
  //
  constructor(//private appService: ExampleAppService,
              @Inject(APP_PARENT) protected parent: ContentFrame,
              @Inject(APP_DTO) protected data: any) {
  }

  // ::: ng
  //
  ngOnInit() {
    // TEST ITEMS
    let list = <any>[
      {id: "1", name: "First Name", description: "First Description"},
      {id: "2", name: "Second Name", description: "Second Description"},
      {id: "3", name: "Third Name", description: "Third Description"}
    ];
    setTimeout(()=>{this.listComponent.getDataSubject().data = list}, 1);
  }

  // ::: init
  //

  // ::: ui
  //
}
