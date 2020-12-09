import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.sass']
})
export class RegionFilterComponent {
  showOptions$: boolean = false;
  storedValue?: string = undefined;

  @Input()
  options!: string[];

  @Input()
  value: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    if (this.storedValue) {
      if (value == this.storedValue) {
        this.valueChange.emit(undefined);
        this.storedValue = undefined;
      } else {
        this.valueChange.emit(value);
        this.storedValue = value;
      }
    } else {
      this.valueChange.emit(value);
      this.storedValue = value;
    }
  }

  get showOptions() {
    return this.showOptions$;
  }

  toggleOptions() {
    this.showOptions$ = !this.showOptions$;
  }

}
