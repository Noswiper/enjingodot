import Animator from '../Animator';

export default class AvatarAnimations {

    // Idle
    public idleRight: Animator;
    public idleDownRight: Animator;
    public idleDown: Animator;
    public idleDownLeft: Animator;
    public idleLeft: Animator;
    public idleUpLeft: Animator;
    public idleUp: Animator;
    public idleUpRight: Animator;

    // Walking
    public walkRight: Animator;
    public walkDownRight: Animator;
    public walkDown: Animator;
    public walkDownLeft: Animator;
    public walkLeft: Animator;
    public walkUpLeft: Animator;
    public walkUp: Animator;
    public walkUpRight: Animator;

    constructor(spriteSheet: any) {

        // Idle right
        this.idleRight = new Animator(spriteSheet);
        this.idleRight.AddFrame(0, 0, 64, 110, 0, 0, 105); 
        
        // Idle down right
        this.idleDownRight = new Animator(spriteSheet);
        this.idleDownRight.AddFrame(320, 0, 64, 110, 0, 0, 105);

        // Idle down
        this.idleDown = new Animator(spriteSheet);
        this.idleDown.AddFrame(640, 0, 64, 110, 0, 0, 105);

        // Idle down left
        this.idleDownLeft = new Animator(spriteSheet);
        this.idleDownLeft.AddFrame(960, 0, 64, 110, 0, 0, 105);

        // Idle left
        this.idleLeft = new Animator(spriteSheet);
        this.idleLeft.AddFrame(1280, 0, 64, 110, 0, 0, 105);

        // Idle up left
        this.idleUpLeft = new Animator(spriteSheet);
        this.idleUpLeft.AddFrame(1600, 0, 64, 110, 0, 0, 105);

        // Idle up
        this.idleUp = new Animator(spriteSheet);
        this.idleUp.AddFrame(1920, 0, 64, 110, 0, 0, 105);

        // Idle up right
        this.idleUpRight = new Animator(spriteSheet);
        this.idleUpRight.AddFrame(2240, 0, 64, 110, 0, 0, 105);


        // Walk right
        this.walkRight = new Animator(spriteSheet);
        for(let i = 64; i <= 256; i += 64)
            this.walkRight.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk down right
        this.walkDownRight = new Animator(spriteSheet);
        for(let i = 384; i <= 576; i += 64)
            this.walkDownRight.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk down
        this.walkDown = new Animator(spriteSheet);
        for(let i = 704; i <= 896; i += 64)
            this.walkDown.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk down left
        this.walkDownLeft = new Animator(spriteSheet);
        for(let i = 1024; i <= 1216; i += 64)
            this.walkDownLeft.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk left
        this.walkLeft = new Animator(spriteSheet);
        for(let i = 1344; i <= 1536; i += 64)
            this.walkLeft.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk up left
        this.walkUpLeft = new Animator(spriteSheet);
        for(let i = 1664; i <= 1856; i += 64)
            this.walkUpLeft.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk up
        this.walkUp = new Animator(spriteSheet);
        for(let i = 1984; i <= 2176; i += 64)
            this.walkUp.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk up right
        this.walkUpRight = new Animator(spriteSheet);
        for(let i = 2304; i <= 2496; i += 64)
            this.walkUpRight.AddFrame(i, 0, 64, 110, 0, 0, 105);

        // Walk right
        this.walkRight = new Animator(spriteSheet);
        for(let i = 64; i <= 256; i += 64)
            this.walkRight.AddFrame(i, 0, 64, 110, 0, 0, 105);
      
        
    }

}