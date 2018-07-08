import { Component, OnInit, Input } from "@angular/core";
import { StoreService } from "../../core/services/store.service";
import { StoreProduct } from "../../core/models/store/StoreProduct";


@Component({
	selector: 'store',
	templateUrl: 'store.component.html'
})

export class StoreComponent implements OnInit {

	public storeProducts: StoreProduct[];
	
	public selectedProduct: StoreProduct = new StoreProduct();

	constructor(private storeService: StoreService) {

	}

	ngOnInit() {
		this.storeService.GetStoreProducts()
			.subscribe(res => this.storeProducts = res);
	}

	onSelectionChange(p: StoreProduct) {
		this.selectedProduct = p;
	}
}