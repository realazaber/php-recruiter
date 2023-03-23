import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent {
  @Input() title: String = "Pricing Category";
  @Input() cost: Number = 0.00;
  @Input() benefits: String[] = ["Benefit 1", "Benefit 2", "Benefit 3"];
  @Input() idealFor: String = "";
}
