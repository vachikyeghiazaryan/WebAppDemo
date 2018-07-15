import { Component, OnInit, Input } from "@angular/core";
import { StoreService } from "../../core/services/store.service";
import { StoreProduct } from "../../core/models/store/StoreProduct";
import { setTimeout } from "timers";

@Component({
	selector: 'app-store',
	templateUrl: 'store.component.html'
})

export class StoreComponent implements OnInit {
	public loading: boolean = false;
	public allStoreProducts: StoreProduct[];
	public storeProducts: StoreProduct[];
	
	public selectedProduct: StoreProduct = new StoreProduct();

	constructor(private storeService: StoreService) {

	}

	ngOnInit() {
		this.loading = true;
		this.storeService.GetStoreProducts()
			.subscribe(res => {
					this.allStoreProducts = res;
					this.onCategoryIdFilterChange(-1);
					this.loading = false;
			});
	}

	onSelectionChange(p: StoreProduct) {
		this.selectedProduct = p;
	}

	onCategoryIdFilterChange(id: number): void {
		this.loading = true;
		setTimeout(() => {
			this.storeProducts = this.allStoreProducts.filter(item => id <= 0 || item.refCategoryId == id);
			this.loading = false;
		}, 5000);
	}
}