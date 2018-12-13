import { DataInfoSerice } from './../../../../providers/services/data-info.service';
import { Component, OnInit } from "@angular/core";
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';
import { MatStepper } from '@angular/material';

import { AppRegExpressionsConfig } from "../../../../providers/litterals/app.regularexpressions";
import { AppLitteralsConfig } from "../../../../providers/litterals/app.litterals";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit{
	public profileForm: FormGroup;
	public AppLitteralsConfig: any = AppLitteralsConfig;
	public socialProfile: any = [
		{
			CODE: "FB",
			DESC: "Facebook"
		},
		{
			CODE: "INSTAGRAM",
			DESC: "Instagram"
		},
		{
			CODE: "TWITTER",
			DESC: "Twitter"
		}
	];
	public usersData:any;
	public emailIdValidator:string;
    public usernameValidator:string;
 
	constructor(public builder: FormBuilder, public router: Router, public stepper: MatStepper, public snackBar: MatSnackBar, public infoService: DataInfoSerice) {
    	this.profileForm = builder.group({
			'USERNAME': [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.username)])],
			'EMAIL_ID': [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.email)])],
			'SOCIAL_PROFILES': [null, Validators.compose([Validators.required])]
		});
	}

	ngOnInit(){
		let usersData = localStorage.getItem('USERS');
		if(usersData !== null){
			this.usersData = JSON.parse(usersData);
		}else{
			this.usersData = usersData || [];
		}
	}

	gotoNextStep(){
		let username = this.profileForm.controls['USERNAME'].value;
		let emailId = this.profileForm.controls['EMAIL_ID'].value;
		this.emailIdValidator = "Please provide another Email Id " + '"' + emailId +'"' + ' Already taken.';
		this.usernameValidator = "Please provider another Username " + '"' + username +'"' + ' Already taken.';
		if(this.usersData.length > 0){
			for(let i=0; i < this.usersData.length; i++){
				if (username === this.usersData[i].USERNAME) {
          			this.snackBar.open(this.usernameValidator, 'Undo', {
            			duration: 2000
          			});
        		} else if (emailId === this.usersData[i].EMAIL_ID) {
						this.snackBar.open(this.emailIdValidator, 'Undo', {
            				duration: 2000
          				});
        		} else {
          			const form = this.profileForm.value;
          			this.infoService.updateApplication(form);
					this.stepper.next();
        		}
			}
		}else{
			const form = this.profileForm.value;
			this.infoService.updateApplication(form);
			this.stepper.next();
		}
	}
}
