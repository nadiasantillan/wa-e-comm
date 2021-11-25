import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-nninput',
  templateUrl: './nninput.component.html',
  styleUrls: ['./nninput.component.less', '../common.less']
})
export class NninputComponent implements OnInit {
  @Input() initial: number = 0;
  @Input() clearButton: boolean = false;
  @Input() limit: number = 0;
  
  faMinus = faMinus;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  value: number = 0;
  @Output() change = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.value = this.initial;
  }

  decrement(): void {
    if (this.value > 1) {
      this.value -= 1;
      this.emit();
    }
  }

  increment(): void {
    if (this.value < this.limit) {
      this.value += 1;
      this.emit();
    }
  }

  clear(): void {
    this.value = 0;
    this.emit();
  }

  private emit(): void {
    this.change.emit(this.value);
  }
}
