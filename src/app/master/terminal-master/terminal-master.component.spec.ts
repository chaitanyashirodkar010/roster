import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalMasterComponent } from './terminal-master.component';

describe('TerminalMasterComponent', () => {
  let component: TerminalMasterComponent;
  let fixture: ComponentFixture<TerminalMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
