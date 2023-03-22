import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-and-img',
  templateUrl: './text-and-img.component.html',
  styleUrls: ['./text-and-img.component.scss']
})
export class TextAndImgComponent {
  @Input() title: string = "Title";
  @Input() pgraph: string = "Paragraph Text";
  @Input() imgUrl: string = "/assets/images/logo.webp";
  @Input() altTxt: string = "No BS Jobs";
  @Input() txtLeft: boolean = true;

  flexDirection: string = "";

  constructor() {

  }

  ngOnInit() {
    if (this.txtLeft == false) {
      this.flexDirection = "flex-row-reverse";
    } else {
      this.flexDirection = "flex-row";
    }
  }
}
