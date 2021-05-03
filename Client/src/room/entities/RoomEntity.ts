import Point from '../../util/Point';
import MovementAnimation from './MovementAnimation';

export default class RoomEntity {

    private _x: number;
    private _y: number;
    private _z: number;
    private _movementAnimation: MovementAnimation;

    constructor(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    get X() {
        return this._x;
    }

    get Y() {
        return this._y;
    }

    get Z() {
        return this._z;
    }

    public Move(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get MovementAnimation() {
        return this._movementAnimation;
    }

    public AddMovementAnimation(toX: number, toY: number) {
        this._movementAnimation = new MovementAnimation(this._x, this._y, toX, toY);
    }

    public Update() {
        if(this._movementAnimation != null)
            this._movementAnimation.Update();
    }

}