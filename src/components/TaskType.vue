<template>
    <div class="task-type">
        <label for="">Type</label>
        <select v-model="type" required>
            <option disabled value="">-- Select --</option>
            <option v-for="type in types" :key="type.value" v-bind:value="type.value">{{ type.text }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

interface TypeObject {
  value: number;
  text: string;
}

@Component
export default class TaskType extends Vue {
  selected: string = ''
  types: TypeObject[] = [
    {
      value: 1,
      text: 'Home'
    },
    {
      value: 2,
      text: 'Work'
    },
    {
      value: 3,
      text: 'Personal'
    },
    {
      value: 4,
      text: 'School'
    }
  ]

  // computed
  get type (): number {
    return this.$store.state.todo.type
  }

  set type (value:number) {
    this.$store.commit('setType', value)
  }
}

</script>

<style scoped>
    .task-type {
        margin: 20px 0;
    }

    .task-type label,
    .task-type select {
        display: block;
        width: 100%;
        font-family: 'Architects Daughter';
    }

    .task-type select {
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
