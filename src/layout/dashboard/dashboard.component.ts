import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit{
	public usersData: any = [];
	
	ngOnInit() {
		let usersData = localStorage.getItem('USERS');
		if(usersData === null){
			this.usersData.length = 0;
		}else{
			this.usersData = JSON.parse(usersData);
		}
	}
}
