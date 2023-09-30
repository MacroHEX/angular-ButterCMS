import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {ContentFrame} from "../../../../base/frames/api/content.frame";

@Component({
  selector: 'app-frame-panel',
  templateUrl: './frame-panel.component.html',
  styleUrls: ['./frame-panel.component.scss']
})
export class FramePanelComponent implements OnInit {
  // :::
  //

  // ::: vars
  //
  title = '';

  // ::: constructor
  //
  constructor(private appService: AppService,
              @Inject(APP_PARENT) protected parent: ContentFrame,
              @Inject(APP_DTO) protected data: any) {
  }

  // ::: init
  //

  // ::: ng
  //
  ngOnInit() {
    this.find();
  }

  // ::: ui
  //

  // ::: methods
  //
  find() {
    this.appService.butter().pages().get(this.data)
      .onSuccess(msg => {
        this.title = msg.data.data.fields.frames.title;
      })
      .call();
  }

}
