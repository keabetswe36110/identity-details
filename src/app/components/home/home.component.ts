import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsComponent } from 'src/app/PopUp/details/details.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private matdialog:MatDialog,private snackbar:MatSnackBar){}

  isComplete:boolean = false;
  year!: any;
  month!: any;
  day!: any;
  gender!: any;
  citizen!: any;
  myDetails: any = {}
  race!: any;

  inputData: any = { id: '' };

  idCheck(): void {
    console.log("if")
    // validating if the input consists of 13 digits...
    this.inputData.id = this.inputData.id.toString()
    console.log(this.inputData.id)
    if (Number(this.inputData.id.toString().length) === 13) {

      

      // validating if the months.
      if (Number(this.inputData.id.toString().slice(2, 4)) > 0 && Number(this.inputData.id.toString().slice(2, 4)) <= 12) {
        
        // validating days of the month
        if(Number(this.inputData.id.toString().slice(4, 6)) > 0 && Number(this.inputData.id.toString().slice(4, 6))<=31){
          
        // working your year............
        this.year = this.inputData.id.toString().slice(0, 2)
        if (Number((this.year.slice(0, 1))) + Number((this.year.slice(1, 2))) < 6) {
          this.year = ('20' + this.year)
          console.log("hello world")
        } else {
          this.year = ('19' + this.year)
          console.log("hello world")
        }
        console.log(this.year)

        // working your month
        this.month = this.inputData.id.toString().slice(2, 4)
        switch (this.month) {
          case '01':
            this.month = ('January')
            break;
          case '02':
            this.month = ('February')
            break;
          case '03':
            this.month = ('March')
            break;
          case '04':
            this.month = ('April')
            break;
          case '05':
            this.month = ('May')
            break;
          case '06':
            this.month = ('June')
            break;
          case '07':
            this.month = ('July')
            break;
          case '08':
            this.month = ('August')
            break;
          case '09':
            this.month = ('September')
            break;
          case '10':
            this.month = ('October')
            break;
          case '11':
            this.month = ('November')
            break;
          case '12':
            this.month = ('December')
            break;
        }


        // working you day
        this.day = this.inputData.id.toString().slice(4, 6)
        console.log(`you were born in ${this.day} ${this.month}  ${this.year}`)


        // working your gender
        this.gender = this.inputData.id.toString().slice(6, 10)
        if (Number(this.gender >= 0 && this.gender <= 4999)) {
          this.gender = "female"
        } else {
          this.gender = "male"
        }

        // working citizen ship.
        this.citizen = this.inputData.id.toString().slice(10, 11)
        if (this.citizen === '0') {
          this.citizen = "you were born in south africa";
        } else if (this.citizen === '1') {
          this.citizen = 'You are a permanent citizeb';
        } else {
          this.snackbar.open("invalid id number , please enter a valid  south african ID number","OK")
          this.inputData.id = '';
          return
        }

        // working race.
        this.race = this.inputData.id.toString().slice(11, 12)
        if(this.race==='8'){
          this.race = 'African'
        }

        this.myDetails = { gender: this.gender , citizen:this.citizen , year:this.year , month:this.month , day :this.day , race:this.race}
        

        this.matdialog.open(DetailsComponent, {data: this.myDetails})
        this.inputData.id = '';

      } else {
        this.snackbar.open("invalid id number , please enter a valid  south african ID number","OK")
        this.inputData.id = '';
        return
      }

        }else{
          this.snackbar.open("invalid id number , please enter a valid  south african ID number","OK")
          this.inputData.id = '';
          return
        }
        
    } else {
      console.log("we are here")
      this.snackbar.open("invalid id number , please enter a valid  south african ID number","OK")
      this.inputData.id = '';
      return
    }

  


  }


}
