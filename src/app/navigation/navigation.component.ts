import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.Emulated // the default
})
export class NavigationComponent implements OnInit {

  @ViewChild('mainNav') navElement: ElementRef;

  constructor() {

  }

  ngOnInit() {
    console.log(this.navElement);

    const nativeElement = this.navElement.nativeElement;
    console.log(nativeElement);

    // don't change the element through this, angular has a better way of accessing / manipulating the DOM.
    // nativeElement.innerHTML = '';
  }

}
