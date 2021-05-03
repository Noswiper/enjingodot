extends Container

var player

func _ready():
	player = get_tree().get_nodes_in_group("player")[0]

func _process(delta):
	$HBoxContainer/Coins/Amount.text = str(player.coins + player.coins_in_wallet)
