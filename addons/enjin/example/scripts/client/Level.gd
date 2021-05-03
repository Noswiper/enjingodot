extends Node2D

# Nodes
onready var player = $"../Player"
onready var spawn = $Spawn
# Exports
export var respawn_height = 2000


func _ready():
	respawn()

func respawn():
	player.position.x = spawn.position.x
	player.position.y = spawn.position.y
