import BaseEvent from './BaseEvent';
import Habbo from '../../Habbo';
import Room from '../../room/Room';

export default class EnterRoomEvent extends BaseEvent {

    private _owner: string;
    private _name: string;
    private _description: string;
    private _likes: number;
    private _hasRights: boolean;
    private _size: number;
    private _floorData: string;

    constructor(data: any) {
        super(data);

        this._owner = data["owner"];
        this._name = data["name"];
        this._description = data["description"];
        this._likes = data["likes"];
        this._hasRights = data["hasRights"];
        this._size = data["size"];
        this._floorData = data["floorData"];

        this.Execute();
    }

    private Execute() {

        if(Habbo.Room)
            Habbo.Room.Dispose();

        Habbo.Room = new Room(
            this._owner,
            this._name,
            this._description,
            this._likes,
            this._hasRights,
            this._size,
            this._floorData
        );

    }
    
}