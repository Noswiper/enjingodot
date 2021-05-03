import BaseEvent from './BaseEvent';
import Habbo from '../../Habbo';
import Room from '../../room/Room';

export default class AuthenticatedEvent extends BaseEvent {

    constructor(data: any) {
        super(data);

        this.Execute();
    }

    private Execute() {

        Habbo.Authenticate();

    }
    
}