import { Component, OnInit, Input, ViewChild, ContentChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() heading: string;
  @ViewChild('header') header: ElementRef;
  @ContentChild('submitButton') submitButton: ElementRef;

  constructor() { }

  ngOnInit() {
    // view child template reference is not available until after the view has been initialized
    // console.log(this.header.nativeElement.textContent);

    // content child template reference is actually available here
    // as long as the template reference has been provided with the content injection
    // console.log(this.submitButton.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    // console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    // console.log(this.submitButton.nativeElement.textContent);
  }

}
