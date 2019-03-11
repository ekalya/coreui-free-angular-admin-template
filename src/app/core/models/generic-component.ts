import { ServiceInterface } from '../services/service-interface.interface';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { InputControlBase } from '.';
import { GenericModel } from './generic-model.model';
import { UIInterface } from './uiinterface';

export class GenericComponent<T extends GenericModel> {
    listItems: T[] = [];
    cols: any[] = [];
    title: string;
    selectedItem: T;
    model: T;
    controls: InputControlBase<any>[] = [];
    constructor(
        private service: ServiceInterface<T>,
        private mService: MessageService,
        private uiService: UIInterface) {
    this.cols = this.uiService.getColumns();
    this.controls = this.uiService.getMetadata();
    }
    addItem(item: T) {
    this.service.create(item).subscribe(addedItem => {
        let listItems = [...this.listItems];
        listItems.push(addedItem);
        this.listItems = listItems;
        this.mService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
    });
    }
    updateItem(updatedItem: T) {
        let listItems = [...this.listItems];
        if (updatedItem.id === undefined) {
        this.service.create(updatedItem).subscribe(loc => {
            this.mService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
            this.listItems.push(loc);
        });
        } else {
        this.service.update(updatedItem).subscribe(loc => {
            this.mService.add({severity: 'success', summary: 'Updated successfully', detail: 'Successfully Updated'});
            listItems[this.listItems.indexOf(this.selectedItem)] = loc;
        });
        }
        this.listItems = listItems;
    }
}
