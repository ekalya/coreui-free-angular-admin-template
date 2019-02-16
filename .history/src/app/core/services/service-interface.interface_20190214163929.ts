import { ApiService } from '.';
import { Observable } from 'rxjs';

export abstract class ServiceInterface<T> {
    public resourceURL: string;
    public abstract setResourceURL(): void;
    constructor(private apiService: ApiService) { }

    create(t: T): Observable<T> {
        return this.apiService.post<T>(this.resourceURL, t);
    }
}
