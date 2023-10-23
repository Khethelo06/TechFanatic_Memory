// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Company',
    data: [31, 40, 28, 51, 42, 80, 85]
  }, {
    name: 'Personal',
    data: [11, 32, 45, 82, 60, 52, 60]
  }],
  chart: {
    height: 300,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#cc3c43", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Personal',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Company',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();