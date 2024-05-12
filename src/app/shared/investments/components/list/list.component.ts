import { Component, OnInit } from '@angular/core';

import { Investments } from '../../model/investments';
import { ListInvestmentsService } from '../../services/list-investments.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  public investments!: Investments[];

  constructor(private service: ListInvestmentsService) { }

  ngOnInit(): void {
    this.service.getInvestments().subscribe(data => {
      this.investments = data;
    });
  }
}
