import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndImgComponent } from './text-and-img.component';

describe('TextAndImgComponent', () => {
  let component: TextAndImgComponent;
  let fixture: ComponentFixture<TextAndImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAndImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAndImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
