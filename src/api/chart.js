import * as d3 from "d3";

export function buildChart(data) {
  let sfData = {
    "name": "Power Outage Data",
    "children": [...data]
  }

  var diameter = 600;

  var bubble = d3.pack(sfData)
    .size([diameter, diameter])
    .padding(8);

  var svg = d3.select("body")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

  var nodes = d3.hierarchy(sfData)
    .sum(function (d) {
      return d.size < 50000 ? d.size * 30 : d.size
    })

  var node = svg.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function (d) {
      return !d.children
    })
    .append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    })

  // create gradient for circles
  var gradient = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

  // Define the gradient colors
  gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#373737")
    .attr("stop-opacity", 1);

  gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#21212rgb(255,0,0)")
    .attr("stop-opacity", 1);

  node.append("circle")
    .attr("r", function (d) {
      return d.r;
    })
    .attr('fill', 'url(#gradient)')

  // append text
  node.append("text")
    .style("text-anchor", "middle")
    .style("letter-spacing", "1")
    .attr("y", (d, i) => {
      let nameSpacing = d.data.locationName.split(" ").length;
      return `-${nameSpacing * 1.15}em`;
    })
    .attr("font-size", function (d) {
      return d.r / 5;
    })
    .attr("fill", d => {
      let riskColor = null;
      switch (d.data.risk) {
        case "None":
          riskColor = "#A4E6A2";
          break;
        case "Low":
          riskColor = "#FBF25A";
          break;
        case "Medium":
          riskColor = "#FEB535";
          break;
        case "High":
          riskColor = "#FF6969";
          break;
        case "Very High":
          riskColor = "#FF6969";
          break;
        default:
          riskColor = "#A4E6A2";
      }
      return riskColor;
    })
    .attr("class", "nodeTitle")
    .selectAll("tspan.text")
    .data(d => d.data.locationName.split(" "))
    .enter()
    .append("tspan")
    .text(d => d)
    .attr("x", 0)
    .attr("dy", (d, i) => {
      return i === 0 ? "1.2em" : "1.3em";
    });

  // add city and state text for location
  node.append("text")
    .attr("dy", "1.9em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `${d.data.city}, ${d.data.abbrState}`;
    })
    .attr("font-size", function (d) {
      return d.r / 7;
    })
    .attr("fill", "#6A6A6A")
    .attr("font-weight", "bold");

  d3.select(self.frameElement)
    .style("height", diameter + "px");




  // const velocityDecay = 0.15;
  // const forceStrength = 0.03;
  // let forceSimulation = d3.forceSimulation()
  //   .nodes(nodes)
  //   .velocityDecay(velocityDecay)
  //   .on('tick', ticked)
  //   .force('x', d3.forceX().strength(forceStrength).x(diameter / 2))
  //   .force('y', d3.forceY().strength(forceStrength).y(diameter / 2))
  //   .force("charge", d3.forceManyBody().strength(charge))

  // function ticked() {
  //   node
  //     .attr("cx", function (d) {
  //       return d.x;
  //     })
  //     .attr("cy", function (d) {
  //       return d.y;
  //     });
  // }

  // function charge(d) {
  //   return -Math.pow(d.radius, 2) * forceStrength;
  // }
}