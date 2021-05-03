import Vue from 'vue';
import Config from '../../../Config';
import RoomListComposer from '../../../networking/composers/RoomListComposer';
import Habbo from '../../../Habbo';

export default class NavigatorComponent {

    private static _component: any;

    public static Register() {
        NavigatorComponent._component = Vue.component('navigator', {

            data() {
                return {
                    'force_open': false,
                    'selected_tab': "public"
                }
            },

            template: `

            <div id="navigator" v-show="this.$parent.navigator_open || force_open" class="navigator">
                <div v-draggable data-ref="navigator" class="navigator-handle">
                    <div v-on:click="close()" class="navigator-close"></div>
                    <h1>{{ title() }}</h1>
                </div>
                
                <div class="navigator-tabs">
                    <div v-on:click="toggleTab('public')" v-bind:class="{ 'navi-public-active': isSelected('public') }" class="navi-tab-public"><h1>Public Spaces</h1></div>
                    <div v-on:click="toggleTab('guest')" v-bind:class="{ 'navi-guest-active': isSelected('guest') }" class="navi-tab-guest"><h1>Guestrooms</h1></div>

                    <div class="navi-small">
                        <div v-on:click="toggleTab('search')" v-bind:class="{ 'navi-small-search-active': isSelected('search') }" class="navi-small-search"><span>Search</span></div>
                        <div v-on:click="toggleTab('favourites')" v-bind:class="{ 'navi-small-favourites-active': isSelected('favourites') }" class="navi-small-favourites"><span>Favourites</span></div>                 
                        <div v-on:click="toggleTab('ownrooms')" v-bind:class="{ 'navi-small-ownRooms-active': isSelected('ownrooms') }" class="navi-small-ownRooms"><span>Own room(s)</span></div>                   
                    </div>
                </div>

                <slot></slot>

            </div>
            
            `,

            methods: {
                title: function() {
                    return Config.navigator.title;
                },

                toggleTab(tab: string) {
                    new RoomListComposer(tab);
                    this.selected_tab = tab;
                },

                isSelected(tab: string) {
                    if(this.selected_tab == tab)
                        return true;
                    return false;
                },

                close() {
                    this.$parent.$data.navigator_open = false;

                    import("../../../../build/assets/furniture/plant_pineapple/plant_pineapple").then((furniture) => {
                        console.log(furniture);
                    });

                }
            }
        });        

    }

    static get Self() {
        return NavigatorComponent._component;
    }

}