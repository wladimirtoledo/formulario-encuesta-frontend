import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGeneroComponent } from './info-genero.component';

describe('InfoGeneroComponent', () => {
  let component: InfoGeneroComponent;
  let fixture: ComponentFixture<InfoGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoGeneroComponent]
    });
    fixture = TestBed.createComponent(InfoGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
