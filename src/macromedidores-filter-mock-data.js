export const macromedidoresFilterMockData = {
  type: "line",
  data: {
    labels: [
      "14/03/2022",
      "15/03/2022",
      "16/03/2022"
    ],
    datasets: [
      {
        label: "Volume Acumulado",
        data: [
          // valores sendo convertidos para no máximo 999 em regra de três
          138.50,  // 13863573,
          138.49, // 13863013,
          138.49
        ],
        borderColor: "#EBD121",
        borderWidth: 3
      },
      {
        label: "Vazão",
        data: [
          742.0,
          746.8,
          742.3
        ],
        borderColor: "#4228EB",
        borderWidth: 3
      },
      {
        label: "Pressão",
        data: [
          // valores sendo convertidos para no máximo 999 em regra de três
          360,  // 3.60,
          360,  // 3.60,
          370,  // 3.70,
        ],
        borderColor: "#EB2815",
        borderWidth: 3
      },
      {
        label: "Temperatura",
        data: [
          // valores sendo convertidos para no máximo 999 em regra de três
          290,  // 29,
          290,  // 29,
          290,  // 29
        ],
        borderColor: "#EB5928",
        borderWidth: 3
      },
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default macromedidoresFilterMockData;
