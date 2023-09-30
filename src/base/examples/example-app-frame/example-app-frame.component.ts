import { Component } from '@angular/core';
import {BaseAppFrame} from "../../frames/base-app.frame";
import {ExampleAppService} from "../example-services/example-app.service";
import {ExampleMainFrameComponent} from "../example-main-frame/example-main-frame.component";

@Component({
  selector: 'app-example-app-frame',
  templateUrl: './example-app-frame.component.html',
  styleUrls: ['./example-app-frame.component.scss']
})
export class ExampleAppFrameComponent extends BaseAppFrame {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(public appService: ExampleAppService) {
    super(appService);
  }

  // ::: ng
  //

  // ::: init
  //
  initFramePortals() {
    this.loadMain(ExampleMainFrameComponent);
  }
}
