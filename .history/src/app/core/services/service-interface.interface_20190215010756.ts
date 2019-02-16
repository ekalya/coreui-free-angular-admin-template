import { ApiService } from '.';
import { Observable, BehaviorSubject } from 'rxjs';

export abstract class ServiceInterface<T> {
    resourceURL: string;
    data: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

    constructor(private apiService: ApiService) {
        this.apiService = apiService;
    }
    create(t: T): Observable<T> {
        return this.apiService.post<T>(this.resourceURL, t);
    }
    getAll(): Observable<T[]> {
        this.apiService.get<T[]>(this.resourceURL).subscribe(data => {
            this.data.next(data);
        });
    return this.data;
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
