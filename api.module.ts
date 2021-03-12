import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DumpService } from './api/dump.service';
import { EventCategoriesService } from './api/eventCategories.service';
import { EventDatesService } from './api/eventDates.service';
import { EventReferencesService } from './api/eventReferences.service';
import { EventsService } from './api/events.service';
import { OrganizationsService } from './api/organizations.service';
import { OrganizersService } from './api/organizers.service';
import { PlacesService } from './api/places.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DumpService,
    EventCategoriesService,
    EventDatesService,
    EventReferencesService,
    EventsService,
    OrganizationsService,
    OrganizersService,
    PlacesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            console.log('ApiModule: You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
