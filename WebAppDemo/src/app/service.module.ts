import { NgModule } from "@angular/core";
import { HomeService } from "./core/services/home.service";
import { StoreService } from "./core/services/store.service";

@NgModule({
	providers: [HomeService, StoreService]
})
export class ServiceModule {

}