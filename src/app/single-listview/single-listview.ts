import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-single-listview',
  imports: [],
  templateUrl: './single-listview.html',
  styleUrl: './single-listview.css',
})
export class SingleListview {
  singleproduct:any;
  constructor(private route:ActivatedRoute,private apiservice:Service,private cdr:ChangeDetectorRef){}
  ngOnInit()
    {
      //parameter mapping
      const
      productid=this.route.snapshot.paramMap.get('titleid');
      if(productid)
       {
        this.apiservice.getSingleProduct(productid).subscribe((data)=>{
          this.singleproduct=data;
          this.cdr.detectChanges()
          //console.log(data);
        });
    }
}}
