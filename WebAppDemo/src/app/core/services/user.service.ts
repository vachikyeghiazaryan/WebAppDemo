import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

	GetUserPermissions(): string[] {
		return ["home.manage", "store.view", "store.modify", "products.view"];
	}
}