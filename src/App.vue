<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" :showForm="showForm" say="Hey! How are you today?" />
    <!-- <Tasks @toggle-status="toggleStatus" @delete-task="deleteTask" :tasks="tasks" />
    <div v-show="showForm" class="content">
      <AddTask @add-task='addTask' />
    </div>-->
    <router-view :showForm="showForm"></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
  data(){
    return{
      showForm: false
    }
  },
  methods:{
    toggleAddTask(){
      this.showForm = !this.showForm
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  font-family: 'Poppins', sans-serif;
}
.container{
  width: 100%;
  height: auto;
  border: 1px solid blue;
  position: relative;
}
.task{
  display: flex;
  padding: 10px 20px;
  background-color: burlywood;
  margin: 0 0 10px 0;
  color: #fff;
  width: 400px;
}
.task.status{
  border-left: 4px solid brown;
}
.content{
  position: absolute;
  top: 30%;
  right: 20%;
}
</style>
