<template>
    <div @dblclick="$emit('toggle-status', task.id)" :class="[task.status ? 'status' : '', 'task']">
        <h4>{{task.text}}</h4>
        <p>{{task.day}}</p>
        <button @click="$emit('delete-task', task.id)">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props:{
        task: Object
    },
    // methods:{
    //     onDelete(id){
    //         this.$emit('delete-task', id)
    //     }
    // }
}
</script>