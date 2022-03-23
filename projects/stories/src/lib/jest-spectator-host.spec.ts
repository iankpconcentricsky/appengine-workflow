import {SpectatorHost} from '@ngneat/spectator/jest';

export class JestSpectatorHost<T> {
    spectator?: SpectatorHost<T>;
    component?: T;

    constructor() {}

    setupTestHost(aSpectator: SpectatorHost<T>) {
        this.spectator = aSpectator;
        this.component = this.spectator.component;
        this.detectAllChanges();
    }

    detectAllChanges() {
        this.spectator?.detectChanges();
        this.spectator?.detectComponentChanges();
    }
}