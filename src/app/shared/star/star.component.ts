import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = 
    new EventEmitter<string>();

  ngOnChanges() {
    
    this.starWidth = this.rating * 86/5;
    console.log(this.starWidth);
  }

  onClick(){
    this.ratingClicked.emit(` The Rating ${this.rating} was clicked!`);
  }
}
