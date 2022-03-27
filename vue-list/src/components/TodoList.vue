<template>
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
            <p v-if="item.status === true" class="green-text">
              {{ index + 1 }}
            </p>
            <p v-else class="red-text">
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
              <p>{{ new Date(item.dueDate).toLocaleDateString() }}</p>
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
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "TodoListForm",
  created() {
    // call actions
    this.$store.dispatch("setIsMobile", window.innerWidth < 600);
  },
  //"isMobile" tambain di props
  props: ["isEmpty", "list", "createdDate"],
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState(["isMobile"])
  },
  data() {
    return {
      onEdit(index) {
        this.$emit("onEdit", index);
      },
      onDelete(index) {
        this.$emit("onDelete", index);
      },
    };
  },
};
</script>

<style>
.table {
  margin-top: 1rem;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
</style>>
