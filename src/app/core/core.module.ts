import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./component/error/error.component";
import { NavbarComponent } from "./component/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        ErrorComponent
    ],
    imports:[
        RouterModule.forChild([
            {
                path: '**', component: ErrorComponent
            }
        ])
    ],
    exports:[
        NavbarComponent,
        ErrorComponent
    ]
})

export class CoreModule{

}