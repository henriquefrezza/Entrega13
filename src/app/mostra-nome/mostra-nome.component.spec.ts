import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraNomeComponent } from './mostra-nome.component';

describe('MostraNomeComponent', () => {
  let component: MostraNomeComponent;
  let fixture: ComponentFixture<MostraNomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraNomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
