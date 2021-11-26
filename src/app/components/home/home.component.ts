import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ViewportScroller } from '@angular/common'

import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('block1') block1: ElementRef | undefined
  @ViewChild('block2') block2: ElementRef | undefined

  @ViewChild('block3') block3: ElementRef | undefined

  constructor(private scroller: ViewportScroller, private myElement: ElementRef) { }

  

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    
  }

  goBlock1() {
    console.log("this.block1.nativeElement.offsetTop", this.block1?.nativeElement.offsetTop)
    if (this.block1) {
      window.scrollTo({
        top: this.block1.nativeElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  goBlock2() {
    if (this.block2) {
      window.scrollTo({
        top: this.block2.nativeElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  goBlock3() {
    if (this.block3) {
      window.scrollTo({
        top: this.block3.nativeElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }

}
