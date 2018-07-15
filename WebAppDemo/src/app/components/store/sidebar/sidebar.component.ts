import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RefCategoryEnum } from '../../../core/models/store/RefCategoryEnum';
import { IdNamePair } from '../../../core/models/IdNamePair';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

	private categories: IdNamePair[] = [];

	@Output()
	selectedCategoryId: EventEmitter<number> = new EventEmitter();

	selCategoryId: number = 0;

    constructor() {

	}

	ngOnInit(): void {
		this.categories.push({ id: -1, name: 'All' });
		this.categories.push({ id: RefCategoryEnum.Food, name: RefCategoryEnum[RefCategoryEnum.Food] });
		this.categories.push({ id: RefCategoryEnum.Wear, name: RefCategoryEnum[RefCategoryEnum.Wear] });
		this.categories.push({ id: RefCategoryEnum.Electronics, name: RefCategoryEnum[RefCategoryEnum.Electronics] });
	}

	categoryChanged(categoryId: number): void {
		this.selCategoryId = categoryId;
		this.selectedCategoryId.emit(categoryId);
	}
}