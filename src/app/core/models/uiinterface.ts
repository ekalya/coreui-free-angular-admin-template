import {InputControlBase } from './input-control-base.model';
export interface UIInterface {
    getMetadata(): InputControlBase<any>[];
    getColumns(): any[];
}
