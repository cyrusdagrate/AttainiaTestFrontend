<template>
  <div>
    <h5>
      Click to change background color into
      <span style="color:green">green</span>
    </h5>
    <table class="table table-bordered" id="DetailTable">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">UserName</th>
          <th scope="col">Last_login</th>
          <th scope="col">Login_count</th>
          <th scope="col">Project_count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.last_login }}</td>
          <td>{{ user.login_count }}</td>
          <td>{{ user.project_count }}</td>
        </tr>
      </tbody>
    </table>
    <md-button class="md-raised md-primary" v-on:click="myFunction">Click here</md-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailTable",
  props: {
    msg: String
  },
  mounted: function() {
    this.$nextTick(function() {
      this.colorFlag = false;
      axios.get("http://localhost:8000/").then(response => {
        this.users = response.data.users;
      });
    });
  },
  data() {
    return {
      colorFlag: null,
      users: null
    };
  },
  methods: {
    myFunction() {
      this.colorFlag = !this.colorFlag;
      var table = document.getElementById("DetailTable");
      var rows = table.getElementsByTagName("tr");
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].login_count === 1 && this.users[i].login_count > 1) {
          if (this.colorFlag) {
            rows[i + 1].className = "greenColor";
          } else {
            rows[i + 1].className = "whiteColor";
          }
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greenColor {
  background-color: #c6efce;
}
.whiteColor {
  background-color: white;
}
</style>
