export function buildChart(data) {
  let sfData = {
    "name": "Power Outage Data",
    "children": [...data]
  }

  var diameter = 600;
  var color = d3.scaleOrdinal(d3.schemeCategory20);

  var bubble = d3.pack(sfData)
    .size([diameter, diameter])
    .padding(1.5);

  var svg = d3.select("body")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

  var nodes = d3.hierarchy(sfData)
    .sum(function (d) {
      return d.size < 100000 ? d.size * 30 : d.size
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
    });

  node.append("circle")
    .attr("r", function (d) {
      return d.r;
    })
    .style("fill", function (d, i) {
      return color(i);
    });

  node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return d.data.locationName.substring(0, d.r / 3);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function (d) {
      return d.r / 5;
    })
    .attr("fill", "white");

  node.append("text")
    .attr("dy", "1.5em")
    .style("text-anchor", "middle")
    .text(function (d) {
      return `${d.data.city}, ${d.data.abbrState}`;
    })
    .attr("font-family", "Gill Sans", "Gill Sans MT")
    .attr("font-size", function (d) {
      return d.r / 7;
    })
    .attr("fill", "white");

  d3.select(self.frameElement)
    .style("height", diameter + "px");



  const velocityDecay = 0.15;
  const forceStrength = 0.03;
  let forceSimulation = d3.forceSimulation()
    .nodes(nodes)
    .velocityDecay(velocityDecay)
    .on('tick', ticked)
    .force('x', d3.forceX().strength(forceStrength).x(diameter / 2))
    .force('y', d3.forceY().strength(forceStrength).y(diameter / 2))
    .force("charge", d3.forceManyBody().strength(charge))

  function ticked() {
    node
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });
  }

  function charge(d) {
    return -Math.pow(d.radius, 2) * forceStrength;
  }
}