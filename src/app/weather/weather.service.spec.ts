import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {WeatherServiceFake} from './weather.service.fake';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: WeatherService, useClass: WeatherServiceFake}]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
