import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { UserService } from "../services/user.service";

@Directive({
	selector: '[permissions]',
	inputs: ['permissions']
})
export class PermissionsDirective {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef, 
		private userService: UserService) {
	}

	@Input() set permissions(allowedPermissions: Array<string>) {
		let shouldShow: number = 0;
		let firstPerm = allowedPermissions.length > 0 ? allowedPermissions[0] : null;
		if (firstPerm === "all" || firstPerm === "any") {
			allowedPermissions.shift();
		}
		if (firstPerm && firstPerm === "all") {
			shouldShow = allowedPermissions.length;
		} else {
			shouldShow = allowedPermissions.length > 0 ? 1 : 0;
		}
		let userPermissions: Array<string> = this.userService.GetUserPermissions();
		for (let permission of userPermissions) {
			if (shouldShow <= 0) {
				break;
			}
			//if (permission.toUpperCase() == "ADMIN") {
			//	shouldShow = true;
			//	break;
			//}
			for (let allowedPermission of allowedPermissions) {
				allowedPermission = allowedPermission.toUpperCase();
				if (allowedPermission.toUpperCase() == permission.toUpperCase()) {
					if (--shouldShow <= 0) {
						break;
					}
				}
			}
		}
		if (shouldShow <= 0) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else { 
			this.viewContainer.clear();
		}
	}
}