import { ChallengeCompletedDialogComponent } from './../challenge-completed-dialog/challenge-completed-dialog.component';
import { UserService } from '../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs/operators";
import {MatDialog,} from '@angular/material/dialog';
import {NoopScrollStrategy} from "@angular/cdk/overlay";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Observable} from "rxjs";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  isPage1 = true;
  isPage4 = false;
  userEnteredValue:string;
  output:any;
  public displayOutput =false;
  public isShowSpinner = false;
  totalProgress =0;
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);
  isSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Small);

  constructor(private userService: UserService, private spinner: NgxSpinnerService,
   public dialog: MatDialog, private breakpointObserver: BreakpointObserver) { 
    this.calculateProgress()
  }

  ngOnInit(): void {
  }

  calculateProgress(){
    this.totalProgress=0;
    if(localStorage.getItem('1')){
      this.totalProgress +=25;
    }if(localStorage.getItem('2')){
      this.totalProgress +=25;
    }if(localStorage.getItem('3')){
      this.totalProgress +=25;
    }if(localStorage.getItem('4')){
      this.totalProgress +=25;
    }if(this.totalProgress ==100){
      this.dialog.open(ChallengeCompletedDialogComponent,{
        width:'500px',
        scrollStrategy: new NoopScrollStrategy(),
        disableClose: true,
        closeOnNavigation: true,
      });
    }
  }

  sendTheNewValue(event){
    this.userEnteredValue = event.target.value;
    this.userEnteredValue=this.userEnteredValue.trim();
  }

  uploadFileOnClick(){
    this.displayOutput= false;
    this.spinner.show();
    this.userService.uploadFile(this.userEnteredValue).
    pipe(finalize(() => this.spinner.hide())).subscribe((data) =>{
      this.output = data;
        this.isShowSpinner = true;
        this.displayOutput= true;
        if(this.output == 'Success!!!'){
          localStorage.setItem('1', 'true');
          this.calculateProgress();
        }
    })
  }

  onClickButton(id: any){
    if(id=="firstPageButton"){
      this.isPage1 = true;
      this.isPage4 = false;
    }else if(id=="fourthPageButton"){
      this.isPage4 = true;
      this.isPage1 = false;
    }
  }

}
