<template>
    <div>
        <button class="region" v-for="region in regions" v-bind:class="isSelected(region)" v-on:click="changeRegion({region:region})">{{region}}</button>
    </div>
</template>

<script>
    import constant from "../constant";
    import _ from "lodash";
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name : "regionButtons",
        /*
        computed : mapGetters([
            "regions",
            "currentRegion"
        ]),
        */
        computed : {
            regions() {
                return this.$store.getters.regions;
            },
            currentRegion() {
                return this.$store.getters.currentRegion;
            }
        },
        methods : _.extend(
            {
                isSelected(region) {
                    if(region == this.currentRegion) {
                        return {selected : true};
                    } else {
                        return {selected : false};
                    }
                }
            },
            mapMutations([
                constant.CHANGE_REGION
            ])
        )
    }
</script>

<style>
    button.region {
        text-align:center;
        width:80px;
        margin:2px;
        border:1px solid #808080;
    }
    button.selected {
        background-color:#800080;
        color:#00ffff;
    }
</style>