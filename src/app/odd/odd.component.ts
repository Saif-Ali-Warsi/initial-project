import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {

  @Input() oddNumber!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
