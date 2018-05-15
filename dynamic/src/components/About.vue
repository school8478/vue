<template>
    <div>
        <h1>About</h1>
        <h3>{{(new Date()).toTimeString()}}</h3>
        <h4>조직도</h4>
        <tree v-bind:subs="orgcharts"></tree>
    </div>
</template>

<script>
    import Tree from "./Tree.vue";

    export default {
        name : "about",
        components : {Tree},
        data : function() {
            return {
                orgcharts : [
                    {
                        name : "(주) OpenSG",
                        type : "company",
                        subs : [
                            {
                                name : "SI 사업부",
                                type : "division",
                                subs : [
                                    {
                                        name : "SI 1팀",
                                        type : "team"
                                    },
                                    {
                                        name : "SI 2팀",
                                        type : "team"
                                    }
                                ]
                            },
                            {
                                name : "BI 사업부",
                                type : "division",
                                subs : [
                                    {
                                        name : "BI 1팀",
                                        type : "team"
                                    },
                                    {
                                        name : "BI 2팀",
                                        type : "team"
                                    },
                                    {
                                        name : "BI 3팀",
                                        type : "team"
                                    }
                                ]
                            },
                            {
                                name : "솔루션 사업부",
                                type : "division",
                                subs : [
                                    {
                                        name : "ESM팀",
                                        type : "team"
                                    },
                                    {
                                        name : "MTS팀",
                                        type : "team"
                                    },
                                    {
                                        name : "ASF팀",
                                        type : "team"
                                    }
                                ]
                            },
                            {
                                name : "총무팀",
                                type : "division"
                            },
                            {
                                name : "인사팀",
                                type : "division"
                            }
                        ]
                    }    
                ]
            }
        }
    }
</script>

<style>
    li.company {color:#0000ff;}
    li.division {color:#4682b4;}
    li.team {color:tomato;}
</style>