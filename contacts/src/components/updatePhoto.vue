<template>
    <div class="modal">
        <div class="form" v-on:keyup.esc="cancelEvent">
            <form method="post" enctype="multipart/form-data">
                <h3 class="heading">:: 사진 변경</h3>
                <input type="hidden" name="no" class="long" disabled v-model="contact.no" />
                <div>
                    <label>현재 사진</label>
                    <img class="thumb" v-bind:src="contact.photo" />
                </div>
                <div>
                    <label>사진 파일 선택</label>
                    <label><input ref="photofile" type="file" name="photo" class="long btn btn-default" /></label>
                </div>
                <div>
                    <div>&nbsp;</div>
                    <input type="button" class="btn btn-primary" value="변 경" v-on:click="photoSubmit()" />
                    <input type="button" class="btn btn-primary" value="취 소" v-on:click="cancelEvent()" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import EventBus from "../eventBus.js";

    export default {
        name : "updatePhoto",
        props : ["contact"],
        methods : {
            cancelEvent : function() {
                EventBus.$emit("cancel");
            },
            photoSubmit : function() {
                var file = this.$refs.photofile.files[0];
                EventBus.$emit("updatePhoto", this.contact.no, file);
            }
        }
    }
</script>

<style scoped>
    .modal {
        display:block;
        position:fixed;
        z-index:1;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow:auto;
        background-color:rgba(0, 0, 0, 0.5);
    }
    .form {
        background-color:#fff;
        margin:100px auto;
        max-width:400px;
        min-width:200px;
        font:13px "verdana";
        padding:10px;
    }
    .form div {
        padding:0;
        display:block;
        margin:10px 0 0;
    }
    .form label {
        text-align:left;
        margin:0 0 3px;
        padding:0;
        display:block;
        font-weight:bold;
    }
    .form input,
    textarea,
    select {
        box-sizing:border-box;
        border:1px solid #bebebe;
        padding:7px;
        margin:0;
        outline:none;
    }
    .form .long {
        width:100%;
    }
    .form .button {
        background:#2b798d;
        padding:8px 15px;
        border:none;
        color:#fff;
    }
    .form .button:hover {
        background:#4691a4;
    }
    .form .heading {
        background:#33a17f;
        font-weight:300;
        text-align:left;
        padding:20px;
        color:#fff;
        margin:5px 0 30px;
        padding:10px;
        min-width:200px;
        max-width:400px;
    }
    img.thumb {
        width:160px;
    }
</style> 