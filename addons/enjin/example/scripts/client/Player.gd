extends KinematicBody2D

var max_speed = 400
var speed = 0
var acceleration = 1200
var move_direction
var moving = false
var destination = Vector2()
var movement = Vector2()
var coins_in_wallet = 0
var coins: int = 0
var wallet
	
	
	
func _unhandled_input(event):
	if event.is_action_pressed('Click'):
		moving = true
		destination = get_global_mouse_position()
		
func _process(delta):
	AnimationLoop()	

func _physics_process(delta):
	MovementLoop(delta)
	
	
func MovementLoop(delta):
	if moving == false:
		speed = 0
	else:
		speed += acceleration * delta
		if speed > max_speed:
			speed = max_speed
	movement = position.direction_to(destination) * speed
	move_direction = rad2deg(destination.angle_to_point(position))
	if position.distance_to(destination) > 5:
		movement = move_and_slide(movement)
	else:
		moving = false

func AnimationLoop():
	var anim_mode = "Idle"
	var animation
	if moving == true:
		anim_mode = "Walk"
	elif moving == false:
		anim_mode = "Idle"
	animation = anim_mode
	get_node("Sprite/AnimationPlayer").play(animation)	
