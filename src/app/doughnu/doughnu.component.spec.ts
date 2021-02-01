import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnuComponent } from './doughnu.component';

describe('DoughnuComponent', () => {
  let component: DoughnuComponent;
  let fixture: ComponentFixture<DoughnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
