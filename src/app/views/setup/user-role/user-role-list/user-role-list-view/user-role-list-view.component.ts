import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Role } from '../../../../../core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-role-list-view',
  templateUrl: './user-role-list-view.component.html',
  styleUrls: ['./user-role-list-view.component.scss']
})
export class UserRoleListViewComponent implements OnInit {
  @Input() public roles: Role[];
  @Input() public dtTrigger: Subject<boolean> = new Subject<boolean>();
  @Input() public dtOptions: DataTables.Settings = {};
  selectedRow: number;
  @Output() public selectedRoleEmitter: EventEmitter<Role> = new EventEmitter<Role>();

  private userRolesTable: any;
  public tableWidget: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  oadBanks() {
    if (this.tableWidget) {
      this.tableWidget.destroy(); // essentially refreshes the table
      // you can also remove all rows and add new
      // this.tableWidget.clear().rows.add(this.shipments).draw();
    }

    let tableOptions: any = {
      data: this.roles,
      dom: 'rt',
      select: true,
      columns: [
          { title: 'Content', data: 'content' },
          { title: 'Packages', data: 'packages' },
          { title: 'Weight', data: 'weight' }
      ]
    };

    this.userRolesTable = $(this.el.nativeElement.querySelector('userRolesTable'));
        this.tableWidget = this.userRolesTable.DataTable(tableOptions);
        this.tableWidget.on('select', (e, dt, type, indexes) => {
            // I DIDN'T TRY THIS IN HERE...Just debug it and check the best way to emit an actual object
            this.selectedRoleEmitter.emit(this.roles[indexes[0]]);
        });

  }
  selectRow(index: number, role: Role) {
    this.selectedRow = index;
    this.selectedRoleEmitter.emit(role);
  }

}
