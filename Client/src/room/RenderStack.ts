import RoomEntity from './entities/RoomEntity';
import { Z } from '../../build/assets/furniture/plant_pineapple/plant_pineapple';
import Avatar from './entities/avatars/Avatar';
import Habbo from '../Habbo';
import SquareMap from './floor/SquareMap';

export default class RenderStack {

    private _stack: Array<RoomEntity>;

    constructor() {
        this._stack = new Array<RoomEntity>();
    }

    public Draw(context2d: CanvasRenderingContext2D) {      
        
        this._stack.forEach(function(entity) {

            context2d.drawImage(
                (<Avatar>entity).Animation.SpriteSheet,
                (<Avatar>entity).Animation.NextFrame().From.X,
                (<Avatar>entity).Animation.NextFrame().From.Y,
                (<Avatar>entity).Animation.NextFrame().To.X,
                (<Avatar>entity).Animation.NextFrame().To.Y,
                (<Avatar>entity).RenderPos.X,
                (<Avatar>entity).RenderPos.Y - Habbo.Room.SquareMap.GetSquare((<Avatar>entity).Y, (<Avatar>entity).X).Height * 32,
                (<Avatar>entity).Animation.NextFrame().To.X,
                (<Avatar>entity).Animation.NextFrame().To.Y
            );
        });
    }

    public AddEntity(entity: RoomEntity) {
        this._stack.push(entity);
        this.Sort();
        console.log(this._stack);
    }

    public RemoveEntity(entity: RoomEntity) {
        let i = this._stack.indexOf(entity);
        this._stack.splice(i, 1);
    }

    public Sort() {
        this._stack.sort((a, b) => a.Z - b.Z);
    }

}