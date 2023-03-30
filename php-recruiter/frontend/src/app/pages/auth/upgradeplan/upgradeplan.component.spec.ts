import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeplanComponent } from './upgradeplan.component';

describe('UpgradeplanComponent', () => {
  let component: UpgradeplanComponent;
  let fixture: ComponentFixture<UpgradeplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
