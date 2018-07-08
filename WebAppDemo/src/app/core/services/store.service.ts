import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StoreProduct } from "../models/store/StoreProduct";
import { StoreEndpoints } from "./service.endpoints";
import { retry } from "rxjs/operator/retry";
import { Observable } from "rxjs/Observable";


export interface IStoreService {
	GetStoreProducts(): Observable<StoreProduct[]>;
}

@Injectable()
export class StoreService implements IStoreService {

	constructor(private http: HttpClient) {

	}

	public GetStoreProducts(): Observable<StoreProduct[]> {

		return this.http.get<StoreProduct[]>(StoreEndpoints.GetStoreProducts);
	}

}