<template>
  <div>
    <div class="row">
      <div class="col s10 m11">
        <input v-model="newTask.title" class="form-control" placeholder="Task name">
      </div>
      <div class="col s2 m1">
        <div class="btn-floating waves-effect waves-light red" @click="createTask(newTask)">
          <i class="material-icons">add</i>
        </div>
      </div>
    </div>
    <div>
      <ul class="collection">
        <task v-for="task in unfinishedTasks" :key="task.id" :task="task" @delete-task="deleteTask" @task-done="doneTask"
          @update-task="updateTask"/>
      </ul>
    </div>
    <div class="btn">Display finished tasks</div>
    <div id="finished-tasks" class="display_none">
      <ul class="collection">
        <task v-for="task in finishedTasks" :key="task.id" :task="task" @delete-task="deleteTask" @task-done="doneTask"
          @update-task="updateTask"/>
      </ul>
    </div>
  </div>
</template>
<script>
  import Task from './tasks/task'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      Task
    },
    data: function(){
      return {}
    },
    computed: {
      ...mapState('task', [
        'unfinishedTasks',
        'finishedTasks',
        'newTask'
      ]),
    },
    mounted() {
      this.fetchTasks()
    },
    methods: {
      ...mapActions('task', [
        'fetchTasks',
        'createTask',
        'deleteTask',
        'doneTask',
        'updateTask'
      ])
    }
  }
</script>
