<template>
    <header>
        <h1>{{say}}</h1>
        <Button 
            @toggle-add-task="$emit('toggle-add-task')" 
            :text="showForm ? 'Close' : 'Add task'" 
            :color="showForm ? 'blue' : 'green'" 
        />
    </header>
</template>

<script>
import Button from './Button';
export default {
    name: 'Header',
    props:{
        say: {
            type: String,
            default: 'Hello world'
        },
        showForm: Boolean 
    },
    components: {
        Button
    },
    // emits: ['toggle-add-task']
}
</script>

<style>
    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    h1{
        font-size: 22px;
    }
</style>