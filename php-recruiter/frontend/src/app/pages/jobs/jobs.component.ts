import { Component } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { Job } from 'src/app/interfaces/Job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  jobs: Job[] = [];

  constructor(private jobService: JobServiceService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
      console.log(this.jobs);
    });
  }
}
