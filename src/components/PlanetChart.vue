<template>
  <div>
    <div>
      <canvas id="macromedidores-chart"></canvas>
    </div>
    <div>
      <canvas id="macromedidores-filter-chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import macromedidoresFilterMockData from '../macromedidores-filter-mock-data';
import macromedidoresMockData from '../macromedidores-mock-data';

export default {
  name: 'PlanetChart',
  data() {
    return {
        macromedidoresMockData: macromedidoresMockData,
        macromedidoresFilterMockData: macromedidoresFilterMockData
    }
  },
  mounted() {
    const localizacaoMacromedidoresChart = document.getElementById('macromedidores-chart');
    new Chart(localizacaoMacromedidoresChart, this.macromedidoresMockData);

    const localizacaoMacromedidoresFilterChart = document.getElementById('macromedidores-filter-chart');
    new Chart(localizacaoMacromedidoresFilterChart, this.macromedidoresFilterMockData);
  }
}
</script>