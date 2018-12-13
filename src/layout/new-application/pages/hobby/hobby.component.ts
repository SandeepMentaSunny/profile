import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AppRegExpressionsConfig } from "../../../../providers/litterals/app.regularexpressions";
import { AppLitteralsConfig } from "../../../../providers/litterals/app.litterals";
import { DataInfoSerice } from "./../../../../providers/services/data-info.service";
@Component({
  selector: "app-hobby",
  templateUrl: "./hobby.component.html",
  styleUrls: ["./hobby.component.css"]
})
export class HobbyComponent {
	public hobbyForm: FormGroup;
	public AppLitteralsConfig: any = AppLitteralsConfig;
	public countries: any = [
		{
			CODE: "INDIA",
			DESC: "India"
		},
		{
			CODE: "USA",
			DESC: "United States"
		},
		{
			CODE: "UK",
			DESC: "United Kingdom"
		}
	];

	constructor(public builder: FormBuilder, public router: Router, public infoService: DataInfoSerice) {
		this.hobbyForm = builder.group({
			'FAVOURITE_GAME': [ null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.username)])],
      		'TEAM_YOU_LIKE': [null, Validators.compose([Validators.required])],
      		'FAVOURITE_COUNTRY': [null, Validators.compose([Validators.required])]
    	});
  	}
	gotoNextStep() {
    	const form = this.hobbyForm.value;
    	this.infoService.updateApplication(form);
  	}
}
