<template>
  <v-container class="ma-auto">
    <v-card
      class="ma-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            PROFILE
          </div>
          <v-list-item-title class="headline mb-1">
            {{ user[0].userName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user[0].email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-avatar>
            <img
              src="../../public/img/504-5040528_empty-profile-picture-png-transparent-png.png"
              alt="Empty"
            >
          </v-avatar>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          color="red"
          @click="deleteUser()"
        >
          DELETE USER
        </v-btn>
        <v-btn
          color="primary"
          @click="refresh()"
        >
          Refresh
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: [
        {
          email: "unknown",
          id: "unknown",
          token: "unknown",
          userName: "unknown",
          userPassword: "unknown",
        },
      ],
    };
  },
  methods: {
    refresh() {
      axios
        .get("https://develop.particula.devbitapp.be/api/user/")
        .then((response) => {
          this.user = response.data;
          console.log(this.user);
        });
    },
    deleteUser() {
      axios
        .delete(
          "https://develop.particula.devbitapp.be/api/user/delete?UserName=" +
            this.user[0].userName
        )
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>
