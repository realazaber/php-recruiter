import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent {
 @Input() id: Number = 0;
 @Input() title: String = "Job title";
 @Input() companyName: String = "Company name";
 @Input() excerpt: String = "Excerpt";
 @Input() companyImg: String = "/images/logo.webp";
 @Input() salaryMin: Number = 0;
 @Input() salaryMax: Number = 1;
}
