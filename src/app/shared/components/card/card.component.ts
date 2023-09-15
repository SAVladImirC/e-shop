import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() image: string = "";
  @Input() content: string = "";
  @Input() hasActions: boolean = true;
  @Input() hasImage: boolean = true;
  @Output() actionClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  click(){
    this.actionClicked.emit();
  }

}
