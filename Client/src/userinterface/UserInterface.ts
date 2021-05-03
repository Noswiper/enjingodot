import Vue from 'vue';
import Config from '../Config';
import HotelviewComponent from './components/hotelview/HotelviewComponent';
import RoomComponent from './components/room/RoomComponent';
import MeMenuComponent from './components/memenu/MeMenuComponent';
import ChatComponent from './components/memenu/ChatComponent';
import MainMenuComponent from './components/memenu/MainMenuComponent';
import NavigatorComponent from './components/navigator/NavigatorComponent';
import DraggableDirective from './directives/DraggableDirective';
import TabGuestComponent from './components/navigator/TabGuestComponent';
import TabPublicComponent from './components/navigator/TabPublicComponent';
import TabOwnComponent from './components/navigator/TabOwnComponent';
import TabFavouriteComponent from './components/navigator/TabFavouriteComponent';
import TabSearchComponent from './components/navigator/TabSearchComponent';

export default class UserInterface {

    public static Container: Vue;

    public static Prepare() {
        UserInterface.RegisterDirectives();
        UserInterface.RegisterComponents();      

        UserInterface.Container = new Vue({

            el: Config.environment.main_container,

            data: {

                // States
                "in_room": false,
                "navigator_open": false,
                "catalog_open": false,
                "inventory_open": false,
                "tradewindow_open": false,

                // Navigator room lists
                "room_list": {
                    "public": [],
                    "guest": [],
                    "search": [],
                    "own": [],
                    "favourite": []
                },

                // Player vars
                "credits": "placeholder_credits",
                "hc_days_left": "0"

            }
        });

        
    }

    private static RegisterDirectives() {
        DraggableDirective.Register();
    }

    private static RegisterComponents() {
        HotelviewComponent.Register();

        MeMenuComponent.Register();
        ChatComponent.Register();
        MainMenuComponent.Register();

        NavigatorComponent.Register();
        TabGuestComponent.Register();
        TabPublicComponent.Register();
        TabSearchComponent.Register();
        TabOwnComponent.Register();
        TabFavouriteComponent.Register();

        RoomComponent.Register();
    }

    public static LoadRoomList(list: string) {

    }

}