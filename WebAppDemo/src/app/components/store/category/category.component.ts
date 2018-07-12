import { Component, Input } from '@angular/core';
import { RefCategoryEnum } from '../../../core/models/store/RefCategoryEnum';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
})
/** category component*/
export class CategoryComponent {
	_categoryId: RefCategoryEnum;

	@Input()
	set categoryId(value: RefCategoryEnum) {
		this._categoryId = value;
	}
	get categoryId() {
		return this._categoryId;
	}

	get categoryIdString() {
		return RefCategoryEnum[this.categoryId];
	}

    constructor() {

    }
}