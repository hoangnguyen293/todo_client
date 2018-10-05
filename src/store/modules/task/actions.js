import gql from 'graphql-tag'
import graphqlClient from '../../../utils/graphql'
import * as mutations from './mutation-types'

export const fetchTasks = async({ commit }) => {
  const response = await graphqlClient.query({
  query: gql`
    query{
      tasks{
        id
        title
        is_done
      }
    }
  `
  });
  commit(mutations.TASK_FETCHED, response.data.tasks)
}

export const createTask = async({ commit }, task) => {
  const response = await graphqlClient.mutate({
  mutation: gql`
    mutation createTask{
      createTask(
        title: "${task.title}"
      ){
        id
        title
        is_done
      }
    }
  `
  });
  commit(mutations.TASK_CREATED, response.data.create_task)
}

export const deleteTask = async({ commit }, task) => {
  const response = await graphqlClient.mutate({
  mutation: gql`
    mutation{
      deleteTask(
        id: ${task.id}
      ){
        id
        title
      }
    }
  `
  });
  commit(mutations.TASK_DELETED, task)
}

export const doneTask = async({ commit }, payload) => {
  payload.task.is_done = payload.status;
  const response = await graphqlClient.mutate({
  mutation: gql`
    mutation{
      editTask(
        id: ${payload.task.id}
        is_done: ${payload.task.is_done}
      ){
        id
        title
        is_done
      }
    }
  `
  });
  commit(mutations.TASK_DONE, payload)
}

export const updateTask = async({ commit }, task) => {
  let title = prompt('Enter new name', task.title).trim()
  if (!title) {
    alert("Title can't be blank!")
    return null
  }
  const response = await graphqlClient.mutate({
  mutation: gql`
    mutation{
      editTask(
        id: ${task.id}
        title: "${title}"
      ){
        id
        title
        is_done
      }
    }
  `
  });
  commit(mutations.TASK_UPDATED, response.data.edit_task)
}

export default {
  fetchTasks,
  createTask,
  deleteTask,
  doneTask,
  updateTask
}
