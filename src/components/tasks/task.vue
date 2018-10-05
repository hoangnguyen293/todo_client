<template lang="html">
  <li :id="`row-task-${task.id}`" class="collection-item">
    <label>
      <input type="checkbox" :id="`task-${task.id}`" @change="fireDoneTask(task, $event)" :checked="task.is_done"/>
      <span>{{ task.title }}</span>
    </label>
    <div class="right btn-group">
      <a class="btn-flat">
        <i class="small material-icons" @click="fireUpdateTask(task)">create</i>
      </a>
      <a class="btn-flat">
        <i class="small material-icons" @click="fireDeleteTask(task)">delete</i>
      </a>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['task'],
    methods: {
      fireDoneTask: function(task, e) {
        this.$emit('task-done', {task: task, status: e.target.checked})
      },
      fireDeleteTask: function(task) {
        this.$emit('delete-task', task)
      },
      fireUpdateTask: function(task) {
        this.$emit('update-task', task)
      }
    }
  }
</script>
