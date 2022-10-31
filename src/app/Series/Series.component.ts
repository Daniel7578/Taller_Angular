import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSerie } from './dataSreies';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {
  series : Array<Serie> = [];
  promediot: number = 0;
  tamanio: number = 0;
  numTemp: number =0;


  constructor(private SerieService: SerieService) { }
  getSeriesList(){
    this.SerieService.getSeries().subscribe(elemtos => {
      this.series = elemtos;
      this.tamanio= this.series.length;
    for (let i = 0; i < this.series.length; i++) {
      this.numTemp+=this.series[i].seasons;
      }
      this.promediot = Math.round(this.numTemp/this.tamanio);
    })

  }
  averageSeasons(series: Serie[]): void {
    let totalS: number = 0;
    let avgss: HTMLElement = document.getElementById("Promedio")!;
    series.forEach((serie) => {(totalS += serie.seasons)});
    avgss.innerHTML = `Promedio de temporadas: ${(totalS / series.length)}`;
  }

  ngOnInit() {
    this.getSeriesList();
  }

}
