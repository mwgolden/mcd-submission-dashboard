import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Tabulator from 'tabulator-tables';

@Component({
  selector: 'app-tabulator-table',
  templateUrl: './tabulator-table.component.html',
  styleUrls: ['./tabulator-table.component.css']
})
export class TabulatorTableComponent implements OnChanges {

  @Input() tableData: any[] = []
  @Input() columnNames: any[] = []
  @Input() height: string = '311px'

  tab = document.createElement('div')

  constructor() { }

   ngOnInit(){}

  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable()
  }
  private drawTable(): void {
    const table = new Tabulator(this.tab, {
      data: this.tableData,
      columns: this.columnNames,
      layout:'fitData',
      height: this.height
    })
    document.getElementById('tabulator-table').appendChild(this.tab)
    table.redraw(true)
    console.log(table)
  }

}
