import { Component } from '@angular/core';
import {BaseAppFrame} from "../base/frames/base-app.frame";
import {AppService} from "./services/app.service";
import {TestMainFrameComponent} from "../mods/ztest/frames/test-main-frame/test-main-frame.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseAppFrame {

  // ::: vars
  //
  title = 'example-web';

  // ::: constructor
  //
  constructor(public appService: AppService) {
    super(appService);
    this.initFramePortals();
  }

  // ::: ng
  //

  // ::: init
  //
  initFramePortals() {
    //this.loadMain(PublicMainFrameComponent);
    this.loadMain(TestMainFrameComponent);
  }



}
