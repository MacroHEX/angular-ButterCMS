import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {AppService} from "../../../../app/services/app.service";
import {APP_DTO, APP_PARENT} from "../../../../base/base.module";
import {ContentFrame} from "../../../../base/frames/api/content.frame";
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';

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
  htmlCode: string = '';
  tsCode: string = '';
  scssCode: string = '';

  // ::: constructor
  //
  constructor(private appService: AppService,
              private cdRef: ChangeDetectorRef,
              @Inject(APP_PARENT) protected parent: ContentFrame,
              @Inject(APP_DTO) protected data: any) {
  }

  // ::: init
  //
  ngAfterViewInit() {
    this.highlight();
  }

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
        this.htmlCode = msg.data.data.fields.frames.html_code;
        this.tsCode = msg.data.data.fields.frames.ts_code;
        this.scssCode = msg.data.data.fields.frames.css_code;

        // Tell Angular to check for updates
        this.cdRef.detectChanges();

        // Now highlight the code
        this.highlight();
      })
      .call();
  }

  highlight() {
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach((block) => {
        Prism.highlightElement(block);
      });
    }, 0);
  }

}
