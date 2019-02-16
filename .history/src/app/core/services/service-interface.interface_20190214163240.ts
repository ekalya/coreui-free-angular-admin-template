import { ApiService } from '.';
import { Observable } from 'rxjs';

export abstract class ServiceInterface<T> {

    constructor(private apiService: ApiService) { }

    create(t: T, resourceURL: string): Observable<T> {
        return this.apiService.post<T>(resourceURL, t);
    }
}
