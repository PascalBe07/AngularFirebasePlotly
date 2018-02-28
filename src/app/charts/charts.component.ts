import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: []
})
export class ChartsComponent implements OnInit {
  @ViewChild("pieChart") xyEl: ElementRef;

  private xyListPath = "/xychart";

  constructor(private dbService: AngularFireDatabase) { }

  ngOnInit() {
    this.dbService.list(this.xyListPath).snapshotChanges()
      .subscribe(result => {
        const keys = result.map((s) => parseInt(s.key));
        const values = result.map((s) => parseInt(s.payload.val()));
        Plotly.purge(this.xyEl.nativeElement);
        this.buildXYChart(keys, values);
      });
  }

  public async onAddXYItem(form: NgForm): Promise<void> {
    if (form.valid){
      const objectPath = this.xyListPath + "/" + form.value.x.toString();
      await this.dbService.object<number>(objectPath).set(parseInt(form.value.y));
    }
  }


  private buildXYChart(x: number[], y: number[]): void {
    const element = this.xyEl.nativeElement;
    const data = [{
      x: x,
      y: y
    }];
    const style = {
      margin: {t: 0}
    };

    Plotly.plot(element, data, style);
  }
}
