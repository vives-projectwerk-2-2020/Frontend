<template>
  <div
    class="container"
    style="margin-bottom: 5vh;"
  >
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
    />
  </div>
</template>

<script>
import LineChart from './Chart.vue'
import axios from "axios";

export default {
  name: 'LineChartContainer',
  props: ['guid','period'],
  components: { LineChart },
  data: () => ({
    loaded: true,
    API_url_measurements: "https://develop.particula.devbitapp.be/measurements/",
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    chartdata: { 
      labels: [],
      datasets: [
        {
          label: 'Pressure',
          data: [],
          backgroundColor:
                    'rgb(0, 153, 0, 0.15)',
                borderColor:
                    'rgb(0, 153, 0, 1)',
                borderWidth: 1
        }
      ] 
    }
  }),
  async mounted () {
    this.loaded = false
    await this.getData()
  },
  methods: {
    async getData() {
      await
        axios
          .get(`${this.API_url_measurements}${this.$props.guid}?period=24h&properties=pressure`)
          .then(response => (this.info = response));
        

        for(let i=0; i < Object.keys(this.info.data).length; i++) {
          this.chartdata.datasets[0].data.push(this.info.data[i].pressure)
          this.chartdata.labels.push(this.info.data[i].time.slice(0,10) + " / " + this.info.data[i].time.slice(11,16))
        }
      this.loaded = true
    }
  }
}
</script>
