<template>
    <form @submit="onSubmit">
        <div>
            <label for="">Text</label>
            <input type="text" placeholder="text" v-model="text">
        </div>
        <div>
            <label for="">Day</label>
            <input type="date" placeholder="day" v-model="day">
        </div>
        <div>
            
            <label for="">Satus</label>
            <input name="status" type="checkbox"  v-model="status"/>
        </div>

        <input type="submit" value="save task" class="btn"/>
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    data(){
        return {
            text: '',
            day: '',
            status: false,
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault();
            if(!this.text){
                alert('roong')
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                status: this.status,
            }

            this.$emit('add-task', newTask)

            this.text = '',
            this.day = '',
            this.status = false
        }
    }
}
</script>