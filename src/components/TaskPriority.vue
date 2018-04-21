<template>
    <div class="task-priority">
        <label for="">Priority</label>
        <select v-model="priority" required>
            <option disabled value="">-- Select --</option>
            <option v-for="priority in priorities" :key="priority.value" v-bind:value="priority.value">{{ priority.text }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

interface PriorityObject {
    value: string;
    text: string;
}

@Component
export default class TaskPriority extends Vue {
  selected: string = ''
  priorities: PriorityObject[] = [
    {
      value: 'a_high',
      text: 'A high priority item'
    },
    {
      value: 'b_medium',
      text: 'A medium priority item'
    },
    {
      value: 'c_low',
      text: 'A low priority item'
    }
  ]

  // computed
  get priority (): string {
    return this.$store.state.todo.priority
  }

  set priority (value:string) {
    this.$store.commit('setPriority', value)
  }
}
</script>

<style scoped>
    .task-priority {
        margin-top: 20px;
    }

    .task-priority label,
    .task-priority select {
        display: block;
        width: 100%;
        font-family: 'Architects Daughter';
    }

    .task-priority select {
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 24px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }
</style>
