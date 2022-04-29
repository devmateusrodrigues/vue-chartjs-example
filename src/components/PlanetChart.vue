<template>
  <div>
    <div>
      <canvas id="macromedidores-chart"></canvas>
    </div>
    <div>
      <input v-model="anoInicio" placeholder="Ano início">
      <input v-model="mesInicio" placeholder="Mês início">
      <input v-model="diaInicio" placeholder="Dia início">
      <input v-model="horaInicio" placeholder="Hora início">
      <input v-model="minutoInicio" placeholder="Minuto início">
      <input v-model="segundoInicio" placeholder="Segundo início">
    </div>
    <div>
      <input v-model="anoFim" placeholder="Ano Fim">
      <input v-model="mesFim" placeholder="Mês Fim">
      <input v-model="diaFim" placeholder="Dia Fim">
      <input v-model="horaFim" placeholder="Hora Fim">
      <input v-model="minutoFim" placeholder="Minuto Fim">
      <input v-model="segundoFim" placeholder="Segundo Fim">
    </div>
    <div>
      <input v-model="nomeMacromedidor" placeholder="Nome do macromedidor">
      <button @click="submitForm">Filtrar</button>
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
import axios from "axios";

export default {
  name: 'PlanetChart',
  data() {
    return {
        macromedidoresMockData: macromedidoresMockData,
        macromedidoresFilterMockData: macromedidoresFilterMockData,
        anoInicio: null,
        mesInicio: null,
        diaInicio: null,
        horaInicio: null,
        minutoInicio: null,
        segundoInicio: null,
        anoFim: null,
        mesFim: null,
        diaFim: null,
        horaFim: null,
        minutoFim: null,
        segundoFim: null,
        nomeMacromedidor: null
    }
  },
  mounted() {
    const localizacaoMacromedidoresChart = document.getElementById('macromedidores-chart');
    new Chart(localizacaoMacromedidoresChart, this.macromedidoresMockData);

    const localizacaoMacromedidoresFilterChart = document.getElementById('macromedidores-filter-chart');
    new Chart(localizacaoMacromedidoresFilterChart, this.macromedidoresFilterMockData);
  },
  methods: {
    submitForm: function() {
      axios.get(
        "http://localhost:8080/macromedidores/api/medicoes/buscarMedicoesPorData?"+
          "anoInicio="+this.anoInicio+"&"+
          "mesInicio="+this.mesInicio+"&"+
          "diaInicio="+this.diaInicio+"&"+
          "horaInicio="+this.horaInicio+"&"+
          "minutoInicio="+this.minutoInicio+"&"+
          "segundoInicio="+this.segundoInicio+"&"+
          "anoFim="+this.anoFim+"&"+
          "mesFim="+this.mesFim+"&"+
          "diaFim="+this.diaFim+"&"+
          "horaFim="+this.horaFim+"&"+
          "minutoFim="+this.minutoFim+"&"+
          "segundoFim="+this.segundoFim+"&"+
          "nomeMacromedidor="+this.nomeMacromedidor,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      ).then(
        (response) => {
          console.dir(response);
        }
      );
    }
  }
}
</script>