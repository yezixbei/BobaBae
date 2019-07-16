import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderLinkedComponent } from './page-header-linked.component';

describe('PageHeaderLinkedComponent', () => {
  let component: PageHeaderLinkedComponent;
  let fixture: ComponentFixture<PageHeaderLinkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderLinkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
