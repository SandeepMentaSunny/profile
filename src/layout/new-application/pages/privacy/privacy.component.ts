import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataInfoSerice } from './../../../../providers/services/data-info.service';
@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.css"]
})
export class PrivacyComponent {
	public privacyForm: FormGroup;
	public applicationData: any = [];

	constructor(public builder: FormBuilder, public infoService: DataInfoSerice, public router: Router){
		this.privacyForm = this.builder.group({
			'ACCEPT': [null, Validators.compose([Validators.required])]
		})
	}

	ngOnInit(){
		
	}

	submitForm() {
    	let applicationData = this.infoService.getUpdateApplicatioData();
		let usersData:any = localStorage.getItem('USERS');
		if(usersData === null){
			this.applicationData.push(applicationData);
			let stringifyData = JSON.stringify(this.applicationData);
			localStorage.setItem('USERS', stringifyData);
			this.router.navigate(['layout/dashboard']);
		}else{
			usersData = JSON.parse(usersData);
			usersData.push(applicationData);
			localStorage.removeItem('USERS');
			localStorage.setItem('USERS', JSON.stringify(usersData));
			this.router.navigate(['layout/dashboard']);
		}
  	}
}
