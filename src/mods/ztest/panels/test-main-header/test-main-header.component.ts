import {Component, Inject} from '@angular/core';
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {MainFrame} from "../../../../base/frames/api/main.frame";
import {TestContentFrameComponent} from "../../frames/test-content-frame/test-content-frame.component";
import {TestOtherFrameComponent} from "../../frames/test-other-frame/test-other-frame.component";

@Component({
  selector: 'app-test-main-header',
  templateUrl: './test-main-header.component.html',
  styleUrls: ['./test-main-header.component.scss']
})
export class TestMainHeaderComponent {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(protected appService: AppService,
              @Inject(APP_PARENT) protected parent: MainFrame,
              @Inject(APP_DTO) protected data: any) {
  }

  // ::: ng
  //

  // ::: init
  //

  // ::: ui
  //
  setContentFrame(frameId:string, data?: any) {
    switch(frameId) {
      case "test":
        this.parent.loadContent(TestContentFrameComponent, data);
        break;
      case "other":
        this.parent.loadContent(TestOtherFrameComponent, data);
        break;
      default:
        this.parent.unloadContent();
    }
  }
}
