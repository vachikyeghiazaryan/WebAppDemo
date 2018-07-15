import { RefCategoryEnum } from "./RefCategoryEnum";

export class StoreProduct {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	refCategoryId: RefCategoryEnum;
}