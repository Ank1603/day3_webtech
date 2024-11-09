"use strict";
document.getElementById("btn").onclick = function () {
  // alert('Hello World!');

  var data1 = document.getElementById("a1").value;
  var data2 = document.getElementById("a2").value;
  var data3 = document.getElementById("a3").value;

  console.log(typeof data1);
  //  console.log(typeof data2);
  // console.log(typeof data3);

  console.log(isNaN(data1));

  console.log(data1);
  console.log(data2);
  console.log(data3);

  var msg = "";
  if (data1 == "" || data2 == "" || data3 == "") {
    msg = "Please enter all fields ";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "All fields should contain numbers ";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "All fields should contain positive numbers ";
  } else {
    var p = Number(data1);
    var r = parseFloat(data2);
    var n = parseInt(data3);

    r = r / 12 / 100;
    n = n * 12;
    var emi = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    var totalpaid = emi * n;
    // var paid = totalpaid - p;
      var si = (p * n * r) / 100;
    p = Math.round(p);
   n = Math.round(n);
    r = Math.round(r);

    document.getElementById("b1").innerHTML = p;
    document.getElementById("b2").innerHTML = r;
    document.getElementById("b3").innerHTML = n;
    // document.getElementById("y4").innerHTML = emi;
  }

  document.getElementById("result").innerHTML = msg;

  Highcharts.chart("container", {
    chart: {
      type: "pie",
    },
    title: {
      text: "Simple Interest Composition",
    },
    tooltip: {
      valueSuffix: "%",
    },
    subtitle: {
      text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "principal amount",
        colorByPoint: true,
        data: [
          {
            name: "rate of interest",
            y: r,
          },
          {
            name: "no of years",
            sliced: true,
            selected: true,
            y: n,
          },
        ],
      },
    ],
  });
};
