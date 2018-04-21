<template>
    <div id="new-todo" class="newTodo">
        <div class="addTodoText">
            <h4>Add Todo Item</h4>
        </div>
        <form v-on:submit.prevent="addTask">
            <task></task>
            <task-priority></task-priority>
            <task-type></task-type>
            <todo-btn type="submit">Submit</todo-btn>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Task from './Task.vue'
import TaskPriority from './TaskPriority.vue'
import TaskType from './TaskType.vue'
import TodoBtn from './TodoBtn.vue'

@Component({
  components: {
    Task,
    TaskPriority,
    TaskType,
    TodoBtn
  }
})
export default class NewTodo extends Vue {
  addTask () {
    this.$store.dispatch('addTask', this.$store.state)
  }
}
</script>

<style scoped>
    .newTodo {
        padding-left: 10%;
        padding-right: 50%;
    }

    .addTodoText {
        border-bottom: 1px solid #fff;
    }

    .addTodoText h4 {
        font-size: 21px;
        margin: 0;
    }
</style>
