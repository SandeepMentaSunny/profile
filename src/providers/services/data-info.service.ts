import { Injectable } from "@angular/core";

@Injectable()
export class DataInfoSerice {
  public applicationInfo: any = {};

  public updateApplication(application: any) {
    this.applicationInfo = Object.assign(this.applicationInfo, application);
  }

  public getUpdateApplicatioData(){
    return this.applicationInfo;
  }
}
