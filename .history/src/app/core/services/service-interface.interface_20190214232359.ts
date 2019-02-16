import { ApiService } from '.';
import { Observable } from 'rxjs';

export abstract class ServiceInterface<T> {
    public resourceURL: string;
    constructor(private apiService: ApiService) {
        this.apiService = apiService;
    }

    /**
     * use this method to set the resource ulr
     * i.e. this.resourceURL = 'resource url';
     */
    public abstract setResourceURL(): void;

    create(t: T): Observable<T> {
        return this.apiService.post<T>(this.resourceURL, t);
    }
    getAll(): Observable<T[]> {
    return this.apiService.get<T[]>(this.resourceURL);
    }
    getById(id: number): Observable<T> {
    return this.apiService.get<T>(this.resourceURL + id);
    }
    update(company: T): Observable<T> {
    return this.apiService.put<T>(this.resourceURL, company);
    }
    delete(id: number): Observable<T> {
    return this.apiService.delete<T>(this.resourceURL + id);
    }
}
