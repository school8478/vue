<template>
    <div id="exmaple">
        <table id="list">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>국가명</th>
                    <th>수도</th>
                    <th>지역</th>
                </tr>
            </thead>
            <tbody id="contacts">
                <tr v-for="c in countries">
                    <td>{{c.no}}</td>
                    <td>{{c.name}}</td>
                    <td>{{c.capital}}</td>
                    <td>{{c.region}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import constant from "../constant";
    import {mapGetters} from "vuex";

    export default {
        name : "countryList",
        computed : mapGetters({
            countries : "countriesByRegion"
        })
    }
</script>

<style>
    #list {
        width:520px;
        border:1px solid #000;
        border-collapse:collapse;
    }
    #list td,
    #list th {
        border:1px solid #000;
        text-align:center;
    }
    #list th:nth-child(4n+1),
    #list td:nth-child(4n+1) {
        width:100px;
    }
    #list th:nth-child(4n+2),
    #list td:nth-child(4n+2) {
        width:150px;
    }
    #list th:nth-child(4n+3),
    #list td:nth-child(4n+3) {
        width:150px;
    }
    #list th:nth-child(4n+1),
    #list td:nth-child(4n) {
        width:120px;
    }
    #list > thead > tr {
        color:#ffff00;
        background:#800080;
    }
</style>