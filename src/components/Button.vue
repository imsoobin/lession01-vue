<template>
    <button
        @click="onClick()"  
        :style="{background: color}"
    >{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        text: String,
        color: String,
    },
    methods:{
        onClick(){
            this.$emit('toggle-add-task')
        }
    },
}
</script>

<style>
    button{
        padding: 5px 20px;
        border: none;
        outline: none;
        background-color: green;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
</style>