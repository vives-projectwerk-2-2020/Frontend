<template>
  <v-app id="inspire">
    <v-container
      class="my-5"
      style="width: 90%"
      fluid
    >
      <p class="display-2 text-center">
        About the project
      </p>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="pt-0"
        >
          <v-img
            src="../img/brugge.jpg"
            :aspect-ratio="16 / 9"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="pt-0"
        >
          <v-img
            src="../img/fine_dust.jpg"
            :aspect-ratio="16 / 9"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pt-0">
          <p class="subtitle-1 text-center">
            We are Electronics-ICT students at the VIVES university of Bruges.
            We were commissioned in preparation for our internship next year to
            fulfill a project of the city of Bruges. The project involves making
            Bruges a smart city. Our teachers Nico and Sille helped us to choose
            how we would approach it. We made a particle sensor that measures
            the harmful substances in Bruges. We created a sensor that does
            that, along with a web app that can display the measurements.
          </p>

          <p class="subtitle-1 text-center">
            This project is completely open source. If you want to build your
            own sensor you can do this! Scroll down for finding out each
            component you need to build this project.
          </p>
        </v-col>
      </v-row>

      <p class="display-1 text-center">
        The final product
      </p>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="pt-0"
        >
          <p class="body-1 text-center">
            The end product not only works well, but is also beautiful. The
            sensor can remain outside when it rains because the material we have
            chosen allows this. The device charges using the solar panel. After
            a dark week, the battery will still work. The device can be used for
            10+ days without charging. After 1 hour of charging with the solar
            panel, the battery is full again. All the materials we used were
            purchased at affordable prices. If you rarely want to build one, the
            material is listed below.
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="pt-0"
        >
          <v-img
            src="../img/final_product.png"
            :aspect-ratio="16 / 9"
          />
        </v-col>
      </v-row>

      <p class="display-1 text-center mt-4">
        VIVES Brugge Station
      </p>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          class="pt-0"
        >
          <v-img
            src="../img/vives.jpg"
            :aspect-ratio="16 / 9"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="pt-0"
        >
          <p class="body-1 text-center">
            The VIVES Bruges technology campus is a stone's throw from the
            station. The courses that you can take there can use the most
            modern, high-tech facilities in the university landscape in
            Flanders. But not only that: because the technology campus is close
            to the station, you also study in the heart of Bruges, a student
            city with age-old traditions, pleasant neighborhoods and ultramodern
            facilities.
          </p>
          <p class="body-2 text-center">
            The campus in Bruges has a casual, personal atmosphere. The
            lecturers are easily approachable and you go out with students from
            other disciplines. In this way you learn to view life from many
            angles. Personal education is one of the assets of the Bruges
            campus: the groups are small and teachers make it a point to work
            and live among the students. As a student you can always count on
            advice and guidance, on remedying problems or on reorientation.
          </p>
          <p class="body-2 text-center">
            The VIVES technology campus is embedded in the KU Leuven buildings
            in Bruges. That way you will also come into contact with students
            from the university day in and day out.
          </p>
          <v-container
            class="pa-0"
            text-center
          >
            <v-btn
              href="https://www.vives.be/en"
              target="_blank"
            >
              Visit VIVES
            </v-btn>
          </v-container>
        </v-col>
      </v-row>

      <p class="display-1 text-center mt-4">
        Extra information
      </p>

      <v-row>
        <v-col class="pt-0">
          <p class="body-1 text-center">
            This project is completely open-source. Feel free to build one
            yourself. Do not hesitate to give us feedback or improvements, we
            appreciate this very much.
          </p>
          <v-container
            class="pa-0"
            text-center
          >
            <v-btn
              class="mb-3"
              href="./BuildSensor"
            >
              Buildyour own sensor
            </v-btn>
          </v-container>

          <p class="body-1 text-center">
            This website is made with vuetify, go checkout their website!
          </p>
          <v-container
            class="pa-0"
            text-center
          >
            <v-btn
              href="https://vuetifyjs.com/en/"
              target="_blank"
            >
              Visit Vuetify
            </v-btn>
          </v-container>
        </v-col>
      </v-row>

      <p class="display-1 text-center mt-4">
        Our experiences
      </p>

      <v-row>
        <v-col class="pt-0">
          <p class="body-1 text-center">
            Working on 1 project with 25 students? We thought this was never
            going to happen. At the beginning of the project, we did not
            progress as quickly, but this was to be expected. 2 weeks later we
            were weakening a bit. After that everyone has picked up.
            Communication was not always smooth, but it is our first project, we
            are working on it. Then we started using different communication
            mediums and things went a lot smoother. Communication improved and
            the project went smoother. We were integrating several things and we
            got 1 full project. After that it was mainly adding featchers and
            fixing bugs. Make the app a bit cleaner in layout and provide the
            sensor with extras. It was a difficult but great project, we learned
            a lot from it.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped></style>
