<template>
  <div class="is-logged-in">
    <div class="title-content">
      <h2>{{ title }}</h2>
    </div>
    <div class="add-button">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Add Todo List
      </button>
      <button @click="onClickLogout" class="btn btn-primary">Logout</button>
    </div>
    <div class="table" v-if="isEmpty === false">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Created Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <th scope="row">
              <p
                v-bind:class="{
                  'red-text': item.status === false,
                  'green-text': item.status === true,
                }"
              >
                {{ index + 1 }}
              </p>
            </th>
            <td>
              <p>{{ item.name }}</p>
            </td>
            <td>
              <p>{{ item.description }}</p>
            </td>
            <td>
              <p>{{ createdDate }}</p>
            </td>
            <td>
              <p>{{ item.dueDate }}</p>
            </td>
            <td v-if="item.status === true">
              <p style="color: green">done</p>
            </td>
            <td v-else><p style="color: red">todo</p></td>
            <td>
              <p>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModalCenter2"
                  @click="onEdit(index)"
                  >Edit</a
                >
                |
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModalCenter3"
                  @click="onDelete(index)"
                  >Delete</a
                >
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2"
export default {
  data() {
    return {
      title: "list",
    };
  },
  props: ["list", "isEmpty"],
  computed: {
    createdDate: function () {
      return new Date().toLocaleDateString();
    },
  },
  created() {
    this.fetchTodoList();
  },
  methods: {
    onClickLogout() {
      this.$router.push({
        path: "/login",
      });
      Swal.fire("Logged Out!", "Redirecting You To Login Page", "warning");
    },
    onDelete(index) {
      console.log(index);
      this.$emit("ondelete", index);
    },
    onEdit(index) {
      this.$emit("onedit", index);
    },
    fetchTodoList() {
      axios
        .get("https://vue-mongoose.herokuapp.com/todos/getTodo", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.getOne.length === 0) {
            this.isEmpty = true;
          } else {
            this.isEmpty = false;
            this.list = response.data.getOne;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>