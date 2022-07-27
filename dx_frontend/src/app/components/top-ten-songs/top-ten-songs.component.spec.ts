import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenSongsComponent } from './top-ten-songs.component';

describe('TopTenSongsComponent', () => {
  let component: TopTenSongsComponent;
  let fixture: ComponentFixture<TopTenSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
