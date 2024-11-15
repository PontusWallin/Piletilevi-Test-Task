import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, of, Subject, switchMap, tap} from 'rxjs';

export enum DiscountState {
  ACTIVE = 'ACTIVE',
  UPCOMING = 'UPCOMING',
  ARCHIVED = 'ARCHIVED'
}

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {
  private readonly BASE_URL = 'https://api.intra.piletilevi.ee';

  private displayedDiscounts: any[] = [];

  private displayedDiscountState: DiscountState = DiscountState.ACTIVE;

  private allDiscounts$ = new BehaviorSubject<any[]>([]);
  private filteredDiscounts$ = new BehaviorSubject<any[]>([]);
  private displayedDiscounts$ = new BehaviorSubject<any[]>([]);
  private discountState$ = new BehaviorSubject<DiscountState>(this.displayedDiscountState);

  private tmpSearchQuery = '';
  private searchQuery$ = new BehaviorSubject<string>('');
  private discountTypes$ = new BehaviorSubject<string[]>(['All Events', 'Ticket Type', 'Event', 'Series']);

  private filtersCleared$ = new Subject<void>();


  constructor(private http: HttpClient) {
    this.loadDiscounts(0, 10).subscribe();
  }

  setDiscountTypes(types: string[]) {
    if (types.length === 0) {
      this.discountTypes$.next(['All Events', 'Ticket Type', 'Event', 'Series']);
      this.loadDiscounts(0, 10).subscribe();
      return;
    }

    this.discountTypes$.next(types);
    this.loadDiscounts(0, 10).subscribe();
  }

  setSearchQuery(query: string) {
    this.tmpSearchQuery = query;
  }

  doSearch() {
    this.searchQuery$.next(this.tmpSearchQuery);
    this.loadDiscounts(0, 10).subscribe();
  }

  setDisplayedDiscountState(state: DiscountState) {
    this.displayedDiscountState = state;
    this.discountState$.next(state);
    this.loadDiscounts(0, 10).subscribe();
  }

  getDisplayedDiscounts(): Observable<any[]> {
    return this.displayedDiscounts$.asObservable();
  }

  getDiscountsLength(): Observable<number> {
    return this.filteredDiscounts$.pipe(
      map((discounts) => discounts.length)
    );
  }

  loadDiscounts(offset = 0, limit = 10): Observable<any[]> {
    return this.allDiscounts$.pipe(
      switchMap((discounts) => {
        if (discounts.length) {
          this.filteredDiscounts$.next(this.filterDiscounts(discounts, this.searchQuery$.value));
          this.displayedDiscounts = this.filteredDiscounts$.value.slice(offset, offset + limit);
          this.displayedDiscounts$.next(this.displayedDiscounts);
          return of(this.displayedDiscounts);
        }

        return this.fetchDiscountsFromAPI().pipe(
          map((discounts) => {
            this.filteredDiscounts$.next(this.filterDiscounts(discounts, this.searchQuery$.value));
            this.displayedDiscounts = this.filteredDiscounts$.value.slice(offset, offset + limit);
            this.displayedDiscounts$.next(this.displayedDiscounts);
            return this.displayedDiscounts;
          })
        );
      })
    );
  }

  private filterDiscounts(discounts: any[], searchTerm: string): any[] {
    let filteredByState = this.filterDiscountsByState(discounts, this.displayedDiscountState);
    let filteredByType = this.filterDiscountsByType(filteredByState, this.discountTypes$.value);
    return this.filterDiscountsBySearch(filteredByType, searchTerm);
  }

  private filterDiscountsByType(discounts: any[], types: string[]): any[] {
    return discounts.filter((discount) => {
      return types.includes(discount.category)
    });
  }

  private filterDiscountsBySearch(discounts: any[], searchQuery: string): any[] {
    return discounts.filter((discount) => {
      return discount.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  public getFiltersCleared(): Observable<void> {
    return this.filtersCleared$.asObservable();
  }

  clearAllFilters() {
    this.searchQuery$.next('');
    this.discountTypes$.next(['All Events', 'Ticket Type', 'Event', 'Series']);
    this.filtersCleared$.next();
    this.loadDiscounts(0, 10).subscribe();
  }

  private filterDiscountsByState(discounts: any[], state: DiscountState): any[] {
    switch (state) {
      case DiscountState.ACTIVE:
        return discounts.filter((discount) => new Date(discount.endDate) > new Date() && new Date(discount.startDate) < new Date());
      case DiscountState.UPCOMING:
        return discounts.filter((discount) => new Date(discount.startDate) > new Date());
      case DiscountState.ARCHIVED:
        return discounts.filter((discount) => new Date(discount.endDate) < new Date());
      default:
        return discounts;
    }
  }

  private fetchDiscountsFromAPI(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/v1/discounts`).pipe(
      tap((discounts) => this.allDiscounts$.next(discounts)) // Cache the discounts
    );
  }
}
