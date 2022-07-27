import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenArtistsComponent } from './top-ten-artists.component';

describe('TopTenArtistsComponent', () => {
  let component: TopTenArtistsComponent;
  let fixture: ComponentFixture<TopTenArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
