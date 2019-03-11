import { GenericModel } from './generic-model.model';
import { Time } from '@angular/common';
export class WorkShift extends GenericModel {
    name: string;
    fromT: Time;
    toT: Time;
}
