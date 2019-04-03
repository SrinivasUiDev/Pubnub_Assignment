import {TestBed} from '@angular/core/testing';

import {ChatEngineServiceService} from './chat-engine-service.service';

describe('ChatEngineServiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ChatEngineServiceService = TestBed.get(ChatEngineServiceService);
        expect(service).toBeTruthy();
    });
});
