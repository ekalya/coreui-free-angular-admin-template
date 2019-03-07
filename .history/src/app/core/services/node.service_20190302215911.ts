import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

    constructor(private http: HttpClient) { }

    getFiles() {
    return this.http.get<any>('assets/showcase/data/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}
