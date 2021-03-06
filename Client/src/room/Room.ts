import RoomRenderer from './RoomRenderer';
import SquareMap from './floor/SquareMap';
import MoveAvatarComposer from '../networking/composers/MoveAvatarComposer';
import Avatar from './entities/avatars/Avatar';
import Square from './floor/Square';
import SquareState from './floor/SquareState';

export default class Room {

    // Room properties
    private _owner: string;
    private _name: string;
    private _description: string;
    private _likes: number;

    // Our players roomvariables
    private _hasRights: boolean;

    // Room objects
    private _squareMap: SquareMap;
    private _roomRenderer: RoomRenderer;

    // Temporary stuff
    private _avatars: Map<number, Avatar>;

    constructor(owner: string, name: string, description: string, likes: number, hasRights: boolean, size: number, floorData: string) {

        this._avatars = new Map<number, Avatar>();

        this._owner = owner;
        this._name = name;
        this._description = description;
        this._likes = likes;

        this._hasRights = hasRights;

        this._squareMap = new SquareMap(size, floorData);
        this._roomRenderer = new RoomRenderer(this);

    }

    get Avatars() {
        return this._avatars;
    }

    get RoomRenderer() {
        return this._roomRenderer;
    }

    get SquareMap() {
        return this._squareMap;
    }

    public Dispose() {
        this._roomRenderer.Dispose();
    }

    public Click(event: any) {
        let relativePos = this._roomRenderer.Camera.RelativeMapPos(event.clientX, event.clientY);

        if(this._squareMap.ValidTile(relativePos.X, relativePos.Y)) {
            new MoveAvatarComposer(relativePos.X, relativePos.Y);
        }  
    }
    

}