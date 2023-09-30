import {Component, Inject} from '@angular/core';
import {BaseContentFrame} from "../../../../base/frames/base-content.frame";
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {MainFrame} from "../../../../base/frames/api/main.frame";
import {HomePanelComponent} from "../../panels/home-panel/home-panel.component";

@Component({
  selector: 'app-home-content-frame',
  templateUrl: './home-content-frame.component.html',
  styleUrls: ['./home-content-frame.component.scss']
})
export class HomeContentFrameComponent extends BaseContentFrame {

  // ::: vars
  //

  // ::: constructor
  //
  constructor(public appService: AppService,
              @Inject(APP_PARENT) parent: MainFrame,
              @Inject(APP_DTO) data: any) {
    super(appService, parent, data);
    this.initFramePortals();
  }

  // ::: ng
  //

  // ::: init
  //
  initFramePortals() {
    this.loadPanel(HomePanelComponent);
  }

}
