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

    <TodoList
      :isMobile="isMobile"
      :isEmpty="isEmpty"
      :list="list"
      :createdDate="createdDate "
    />
        
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
              class="btn-close"
              data-bs-dismiss="modal"
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
import TodoList from "../components/TodoList.vue";
import { TODO_GET } from "../constants/api"
import { TODO_UPDATE } from "../constants/api"
import { TODO_DELETE } from "../constants/api"
import { USER_REGISTER } from "../constants/api"
export default {
  name: "TodosForm",
  components: {
    TodoList
  },
  data() {
    return {
      title: "list",
      list: [],
      isEmpty: false,
      newName: "",
      newDescription: "",
      newStatus: false,
      dueDate: "",
      editTodoId: "",
      editName: "",
      editDueDate: "",
      editStatus: false,
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
      console.log(this.list[index])
      (this.editTodoId = this.list[index]._id),
        (this.editName = this.list[index].name),
        (this.editDueDate = this.list[index].dueDate),
        (this.editStatus = this.list[index].editStatus),
        (this.editDescription = this.list[index].description);
    },
    fetchTodoList() {
      axios
        .get(`${TODO_GET}`, {
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
          `${USER_REGISTER}`,
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
      console.log(`${TODO_UPDATE}/${this.editTodoId}`)
      console.log(this.editTodoId);
      axios
        .put(
          `${TODO_UPDATE}/${this.editTodoId}`,
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
          `${TODO_DELETE}/${this.deleteTodoId}`,
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