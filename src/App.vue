<template>
  <div id="app">
    <main-header></main-header>
    <div class="container">
      <new-todo></new-todo>
      <div class="sortBtns">
        <todo-btn v-on:click.native="highPriority">Order by Highest Priority</todo-btn>
        <todo-btn v-on:click.native="lowPriority">Order by Lowest Priority</todo-btn>
        <todo-btn v-on:click.native="alphaOrder">Order Alphabetically</todo-btn>
      </div>
      <div>
        <task-list></task-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import MainHeader from './components/MainHeader.vue'
import NewTodo from './components/NewTodo.vue'
import TodoBtn from './components/TodoBtn.vue'
import TaskList from './components/TaskList.vue'

@Component({
  components: {
    MainHeader,
    NewTodo,
    TaskList,
    TodoBtn
  }
})
export default class App extends Vue {
  // methods
  alphaOrder ($event:any) {
    this.$store.commit('alphaOrder', $event.target.value)
  }

  highPriority ($event:any) {
    this.$store.commit('highPriority', $event.target.value)
  }

  lowPriority ($event:any) {
    this.$store.commit('lowPriority', $event.target.value)
  }
}
</script>

<style>
body {
  background-color: #0f0802;
  background-image: url(https://www.transparenttextures.com/patterns/leather.png);
  margin: 0;
}

#app {
  font-family: 'Architects Daughter';
  position: relative;
  margin: 0 10%;
  width: 80%;
  height: 100%;
  background-color: #c9c920;
  background-image: url(https://www.transparenttextures.com/patterns/notebook.png);
}

.container {
  position: relative;
  width: 100%;
  padding-top: 20px;
}

.sortBtns {
  margin-top: 40px;
  display: inline-flex;
  width: 100%;
}

.todo-btn {
  width: 100%;
  padding: 0 7%;
}
</style>
