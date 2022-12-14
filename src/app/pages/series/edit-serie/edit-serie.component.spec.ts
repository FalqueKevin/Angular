import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSerieComponent } from './edit-serie.component';

xdescribe('EditSerieComponent', () => {
  let component: EditSerieComponent;
  let fixture: ComponentFixture<EditSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
