import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { StoreProduct } from "../../../core/models/store/StoreProduct";


@Component({
	selector: 'app-product-item',
	templateUrl: 'product.item.component.html'
})
export class ProductItemComponent implements OnInit {
	@Output()
	selected: EventEmitter<StoreProduct> = new EventEmitter();

	@Input()
	product: StoreProduct;

	ngOnInit() {

	}

	onClick() {
		this.selected.emit(this.product);
	}
}