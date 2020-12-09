import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.sass']
})
export class RegionFilterComponent {
  @Input()
  placeholder!: string;

  @Input()
  options!: string[];

}
