import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-community-edit',
  templateUrl: './community-edit.component.html',
  styleUrls: ['./community-edit.component.scss']
})
export class CommunityEditComponent implements OnInit {
  id: number;
  mode = 'add';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.mode = params[`mode`];
        if (this.mode === 'edit' || this.mode === 'view') {
          this.id = +params[`id`];
        }
        console.log(this.id, this.mode);
      }
    });
  }

}
