<template>
    <div class="task">
        <label for="">Task</label>
        <input type="text" v-model="task" required>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Task extends Vue {
  get task (): string {
    return this.$store.state.todo.task
  }

  set task (value:string) {
    this.$store.commit('setTask', value)
  }
}
</script>

<style scoped>
    .task {
        margin-top: 20px;
    }

    .task label, input {
        display: block;
        width: 100%;
        font-family: 'Architects Daughter';
    }

    .task input {
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 20px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }
</style>
