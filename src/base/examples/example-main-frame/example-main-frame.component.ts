import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {AppFrame} from "../../frames/api/app.frame";
import {APP_DTO, APP_PARENT} from "../../base.module";
import {BaseMainFrame} from "../../frames/base-main.frame";
import {ExampleAppService} from "../example-services/example-app.service";
import {ExampleContentFrameComponent} from "../example-content-frame/example-content-frame.component";

@Component({
  selector: 'app-example-main-frame',
  templateUrl: './example-main-frame.component.html',
  styleUrls: ['./example-main-frame.component.scss']
})
export class ExampleMainFrameComponent extends BaseMainFrame /*implements OnInit*/ {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(public appService: ExampleAppService,
              @Inject(APP_PARENT) protected parent: AppFrame,
              @Inject(APP_DTO) protected data: any) {
    super(appService, parent, data);
    this.initFrameContainer();
  }

  // ::: ng
  //
  /*
   * ngOnInit() {
   * }
   */

  // ::: init
  //
  initFrameContainer() {
    //this.loadHeader(comp, data)
    this.loadContent(ExampleContentFrameComponent);
    //this.loadFooter(comp, data)
  }

}
