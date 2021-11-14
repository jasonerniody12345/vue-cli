<template>
  <div class="is-logged-in">
    <div class="title-content">
      <h2>{{ title }}</h2>
    </div>
    <div class="add-button">
      <button
        type="button"
        class="btn btn-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#todoModal"
      >
        Add Todo List
      </button>
      <button @click="onClickLogout" class="btn btn-primary ms-2">
        Logout
      </button>
    </div>
    <div class="table" v-if="isEmpty === false">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <template v-if="isMobile === false">
            <th scope="col">Created Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Status</th>
            </template>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <th scope="row">
              <p v-if="item.status === true"
                class="green-text"
              >
                {{ index + 1 }}
              </p>
              <p v-else
                class="red-text"
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
              <template v-if="isMobile === false">
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
              </template>
            <td>
              <p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  @click="onEdit(index)"
                  >Edit</a
                >
                |
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  @click="onDelete(index)"
                  >Delete</a
                >
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Create Todo Modal -->
    <div
      class="modal fade in"
      id="todoModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Create Todo List
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              class="form-control mt-2"
              v-model="newName"
              placeholder="name"
              @keyup.enter="onSubmit"
            />
            <input
              type="text"
              class="form-control mt-2"
              v-model="newDescription"
              placeholder="description"
              @keyup.enter="onSubmit"
            />
            <input
              type="date"
              class="form-control mt-2"
              v-model="dueDate"
              @keyup.enter="onSubmit"
            />
            <br />
            <p>Todo or Done</p>
            <label class="switch">
              <input
                type="checkbox"
                checked
                v-model="newStatus"
                @keyup.enter="onSubmit"
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              :disabled="validateContentInput === false"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="onSubmit"
            >
              Add List
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Edit Todo Modal -->
    <div
      class="modal fade in"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Edit Todo List
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="test"
              class="form-control mt-2"
              v-model="editName"
              placeholder="name"
              @keyup.enter="onSubmitEdit"
            />
            <input
              type="text"
              class="form-control mt-2"
              v-model="editDescription"
              placeholder="description"
              @keyup.enter="onSubmitEdit"
            />
            <input
              type="date"
              class="form-control mt-2"
              v-model="editDueDate"
              @keyup.enter="onSubmitEdit"
            />
            <br />
            <p>Todo or Done</p>
            <label class="switch">
              <input
                type="checkbox"
                checked
                v-model="editStatus"
                @keyup.enter="onSubmitEdit"
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="onSubmitEdit"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Delete Todo Modal -->
    <div
      class="modal fade in"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Delete Todo List
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete todo {{ deleteTodoName }}?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="onConfirmDelete"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "TodosForm",
  data() {
    return {
      title: "list",
      list: [],
      isEmpty: false,
      newName: "",
      newDescription: "",
      newStatus: "",
      dueDate: "",
      editTodoId: "",
      editName: "",
      editDueDate: "",
      editStatus: "",
      editDescription: "",
      deleteTodoName: "",
      deleteTodoId: "",
    };
  },
  computed: {
    createdDate () {
      return new Date().toLocaleDateString();
    },
    validateContentInput () {
      return (
        this.newName !== "" && this.newDescription !== "" && this.dueDate !== ""
      );
    },
    isMobile() {
      return window.innerWidth < 600;
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
      this.deleteTodoId = this.list[index]._id;
      this.deleteTodoName = this.list[index].name;
    },
    onEdit(index) {
      (this.editTodoId = this.list[index]._id),
        (this.editName = this.list[index].name),
        (this.editDueDate = this.list[index].dueDate),
        (this.editStatus = this.list[index].editStatus),
        (this.editDescription = this.list[index].description);
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
    onSubmit() {
      axios
        .post(
          "https://vue-mongoose.herokuapp.com/todos/create",
          {
            name: this.newName,
            description: this.newDescription,
            status: this.newStatus,
            dueDate: this.dueDate,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          (this.newName = ""),
            (this.newDescription = ""),
            (this.dueDate = ""),
            Swal.fire("Sucessfully Added Todo!", "", "success");
          this.fetchTodoList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSubmitEdit() {
      console.log(this.editTodoId);
      axios
        .put(
          `https://vue-mongoose.herokuapp.com/todos/update/${this.editTodoId}`,
          {
            name: this.editName,
            description: this.editDescription,
            status: this.editStatus,
            dueDate: this.editDueDate,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          this.fetchTodoList();
          Swal.fire("You Updated Recent Todo", "", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onConfirmDelete() {
      axios
        .delete(
          `https://vue-mongoose.herokuapp.com/todos/delete/${this.deleteTodoId}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          this.fetchTodoList();
          Swal.fire("You Just Deleted The Recent Todo", "", "success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.modal-content {
  background-color: white !important;
}
</style>