import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/interfaces/Job';
import { JobServiceService } from 'src/app/services/job-service.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  job: Job | null = null;

  constructor(private route: ActivatedRoute, private jobService: JobServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.jobService.getJob(id).subscribe((job: Job) => {
        this.job = job;
        console.log(this.job);
      })
    });
  }

}
