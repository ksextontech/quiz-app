import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.Emulated // the default
})
export class NavigationComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @ViewChild('mainNav') navElement: ElementRef;

  constructor() {
    // console.log('constructor())');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges()');
    // console.log(changes);
    // called once during component creation
    // and after each time a bound property changes
  }

  ngOnInit(): void {
    // console.log('ngOnInit()');
    // called once the component is initialized
    // this is called after the constructor

    // console.log(this.navElement);

    const nativeElement = this.navElement.nativeElement;
    // console.log(nativeElement);

    // don't change the element through this, angular has a better way of accessing / manipulating the DOM.
    // nativeElement.innerHTML = '';
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck()');
    // called during every change detection run
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit()');
    // called after (ng-content) has been projected into the view
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked()');
    // called every time the projected content has been checked
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit()');
    // called after a component's view (and child views) have been initialized
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked()');
    // called every time the view (and child views) have been checked
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy()');
    // called once the component is about to be destroyed
  }
}
