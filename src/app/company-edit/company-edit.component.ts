import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  id: any;
  company: Company = new Company();
  companyForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService.getById(this.id).subscribe(result => {
      this.company = result;
      console.log(this.company);
    });
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.companyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.companyForm.invalid) {
      return;
    } else {
      console.log(this.company)
      this.companyService.updateCompanyDetailsFromDb(this.company, this.id).subscribe(result => {
        console.log("Company Updated Successfully.");
        this.router.navigate(["/companies"]);
      }, (err) => { console.log(err) })
    }
  }

  goBack() {
    this.location.back();
  }
}
