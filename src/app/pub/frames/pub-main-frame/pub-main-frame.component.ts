import {Component, Inject} from '@angular/core';
import {BaseMainFrame} from "../../../../base/frames/base-main.frame";
import {AppService} from "../../../services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {AppFrame} from "../../../../base/frames/api/app.frame";
import {TestContentPanelComponent} from "../../../../mods/ztest/panels/test-content-panel/test-content-panel.component";
import {TestMainHeaderComponent} from "../../../../mods/ztest/panels/test-main-header/test-main-header.component";
import {PubMainHeaderComponent} from "../../panels/pub-main-header/pub-main-header.component";
import {HomeContentFrameComponent} from "../../../../mods/home/frames/home-content-frame/home-content-frame.component";
import {PubMainFooterComponent} from "../../panels/pub-main-footer/pub-main-footer.component";

@Component({
  selector: 'app-pub-main-frame',
  templateUrl: './pub-main-frame.component.html',
  styleUrls: ['./pub-main-frame.component.scss']
})
export class PubMainFrameComponent extends BaseMainFrame {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(public appService: AppService,
              @Inject(APP_PARENT) parent: AppFrame,
              @Inject(APP_DTO) data: any) {
    super(appService, parent, data);
    this.initFramePortals();
  }

  // ::: ng
  //

  // ::: init
  //
  initFramePortals() {
    this.loadHeader(PubMainHeaderComponent);
    this.loadContent(HomeContentFrameComponent);
    // this.loadFooter(PubMainFooterComponent);
  }
}
