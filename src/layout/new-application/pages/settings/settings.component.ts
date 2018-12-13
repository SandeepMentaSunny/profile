import { DataInfoSerice } from './../../../../providers/services/data-info.service';
import { Component } from "@angular/core";
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { AppRegExpressionsConfig } from '../../../../providers/litterals/app.regularexpressions';
import { AppLitteralsConfig } from "../../../../providers/litterals/app.litterals";
@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent {
	public settingsForm: FormGroup;
	public holidayPlaces:any = [
		{
			"CODE": "INDIA",
			"DESC": "India"
		},
		{
			"CODE": "EAST_INDIA",
			"DESC": "East India"
		},
		{
			"CODE": "OTHERS",
			"DESC": "Others"
		}
	]

	constructor(public builder: FormBuilder, public router: Router, public infoService: DataInfoSerice){
		this.settingsForm = builder.group({
    		'FIRST_TV': [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.username)])],
    		'FIRST_CREDIT_CARD': [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.username)])],
    		'HOLIDAY_PLACE': [null, Validators.compose([Validators.required])]
    	});
	}

	gotoNextStep() {
    	const form = this.settingsForm.value;
    	this.infoService.updateApplication(form);
  	}
}
