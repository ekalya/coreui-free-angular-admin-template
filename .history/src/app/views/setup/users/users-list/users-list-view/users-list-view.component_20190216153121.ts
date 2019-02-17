import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {
  @Input() public users: User[];
  @Input() public dtTrigger: Subject<boolean> = new Subject<boolean>();
  @Input() public dtOptions: DataTables.Settings = {};
  selectedRow: number;
  @Output() public selectedUserEmitter: EventEmitter<User> = new EventEmitter<User>();

  private usersTable: any;
  public tableWidget: any;
  constructor() { }

  ngOnInit() {
  }
  oadBanks() {
    if (this.tableWidget) {
      this.tableWidget.destroy(); // essentially refreshes the table
      // you can also remove all rows and add new
      // this.tableWidget.clear().rows.add(this.shipments).draw();
    }

    let tableOptions: any = {
      data: this.users,
      dom: 'rt',
      select: true,
      columns: [
          { title: 'Content', data: 'content' },
          { title: 'Packages', data: 'packages' },
          { title: 'Weight', data: 'weight' }
      ]
    };

    this.usersTable = $(this.el.nativeElement.querySelector('usersTable'));
        this.tableWidget = this.usersTable.DataTable(tableOptions);
        this.tableWidget.on('select', (e, dt, type, indexes) => {
            // I DIDN'T TRY THIS IN HERE...Just debug it and check the best way to emit an actual object
            this.selectedUserEmitter.emit(this.users[indexes[0]]);
        });

  }
  selectRow(index: number, user: User) {
    this.selectedRow = index;
    this.selectedUserEmitter.emit(user);
  }

}
