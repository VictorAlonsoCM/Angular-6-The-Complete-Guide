import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {
  @Input() element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('Construct');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('Text content:', this.header.nativeElement.textContent);
  }


  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('Text content:', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
