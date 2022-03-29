import { Component, OnInit } from '@angular/core';
import { Mark } from 'src/app/core/models/mark.model';
import { InitProcessingService } from 'src/app/core/services/init-processing.service';
import { FilterProcessingService } from '../../services/filter-processing.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  marks: Mark[] = [];
  constructor(
    private initProcessingService: InitProcessingService,
    private filterProcessingService: FilterProcessingService
  ) {}

  ngOnInit(): void {
    this.initProcessingService.marks.subscribe((data) => (this.marks = data));
  }

  selectMark(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.filterProcessingService.setMark(+target.value ? +target.value : null);
  }
}
