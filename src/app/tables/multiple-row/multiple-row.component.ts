import { CommonModule } from '@angular/common';
import { Component, effect, input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-multiple-row',
  imports: [MatTableModule, CommonModule],
  templateUrl: './multiple-row.component.html',
  styleUrl: './multiple-row.component.css',
})
export class MultipleRowComponent implements OnInit {
  cols = input.required<string[]>();
  secondCols = input<string[]>();
  data = input.required<any[]>();
  dataSource = new MatTableDataSource<any[]>();
  isTotalRow = input.required<boolean>();

  constructor() {
    effect(() => {
      if (this.data()) {
        this.dataSource.data = this.data();
      }
    });
  }

  ngOnInit(): void {}
}
