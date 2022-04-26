<template>
    <div v-show="showForm" class="content">
      <AddTask @add-task='addTask' />
    </div>
    <Tasks @toggle-status="toggleStatus" @delete-task="deleteTask" :tasks="tasks" />
    <Footer /> 
</template>
<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import Footer from '../components/Footer'
import {getData, addTask, deleteTask, upadateStatus} from '../API/callapi'
export default {
    name: 'Home',
    props: {
        showForm: Boolean
    },
    components:{
        Tasks, 
        AddTask,
        Footer 
    },
    data(){
        return{
            tasks: []
        }
    },
    methods:{
        deleteTask(id){
            if(confirm('Are you sure?')){
            const delTask = deleteTask(id).then(res => {
                res?.status === 200 ? this.tasks = this.tasks.filter((task) => task.id !== id)
                : alert('error delete')
            })
            return delTask
            }
        },

        toggleStatus(id){
            try{
                const status = upadateStatus(id).then(res => {
                res?.status === 200 ? (this.tasks = this.tasks.map((task) => 
                task.id === id ? {...task, status: !task.status} : task
                )) : alert('error')
            })
            return status
            }
            catch(err){
                console.log(err.message);
            }
        },

        addTask(taskNew){
            const taskAdded = addTask(taskNew).then(res => {
                const data = res?.data
                this.tasks = [...this.tasks, data]
            })
            return taskAdded
            },

        async getTasks(){
            const data = getData().then(res => { return res?.data})
            return data
        },
    },
    async created(){
        this.tasks = await this.getTasks()
    }
}
</script>