import {Component, Inject} from '@angular/core';
import {AppService} from "../../../services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {MainFrame} from "../../../../base/frames/api/main.frame";
import {HomeContentFrameComponent} from "../../../../mods/home/frames/home-content-frame/home-content-frame.component";
import {FramePanelComponent} from "../../../../mods/frames/panels/frame-panel/frame-panel.component";

@Component({
  selector: 'app-pub-main-header',
  templateUrl: './pub-main-header.component.html',
  styleUrls: ['./pub-main-header.component.scss']
})
export class PubMainHeaderComponent {
  // :::
  //

  // ::: vars
  //

  // ::: constructor
  //
  constructor(protected appService: AppService,
              @Inject(APP_PARENT) protected parent: MainFrame,
              @Inject(APP_DTO) protected data: any) {
  }

  // ::: init
  //

  // ::: ng
  //

  // ::: ui
  //
  setFrame(frameId: string, data?: any) {
    data = frameId.toLowerCase();
    switch (frameId) {
      case 'home':
        this.parent.loadContent(HomeContentFrameComponent, data);
        break;
      case 'mainFrame':
        this.parent.loadContent(FramePanelComponent, data);
        break;
      case 'contentFrame':
        this.parent.loadContent(FramePanelComponent, data);
        break;
      case 'panels':
        this.parent.loadContent(HomeContentFrameComponent, data);
        break;
      case 'dialogs':
        this.parent.loadContent(HomeContentFrameComponent, data);
        break;
      case 'components':
        this.parent.loadContent(HomeContentFrameComponent, data);
        break;
      default:
        this.parent.unloadContent();
    }
  }

  // ::: methods
  //

}
