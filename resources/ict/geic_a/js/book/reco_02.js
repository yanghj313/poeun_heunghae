const data = [
    {
        label: "헐리우드 영화",
        color: "#ff6319",
        radius: 120,
        id: "id1",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(82%) sepia(42%) saturate(4528%) hue-rotate(300deg) brightness(100%) contrast(109%)",
        btn: "btn1()",
        x: 0,
        y: 0

  },
    {
        label: "고전명작동화",
        color: "#00b0ca",
        radius: 110,
        id: "id2",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(64%) sepia(72%) saturate(2118%) hue-rotate(141deg) brightness(96%) contrast(101%)",
        btn: "btn2()"


  },
    {
        label: "중단편소설",
        color: "#ffc18c",
        radius: 100,
        id: "id3",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(41%) sepia(35%) saturate(1481%) hue-rotate(200deg) brightness(101%) contrast(89%)",
        btn: "btn3()"

  },
    {
        label: "뮤지컬",
        color: "#d9ec9c",
        radius: 100,
        id: "id4",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(44%) sepia(13%) saturate(260%) hue-rotate(225deg) brightness(93%) contrast(89%)",
        btn: "btn4()"

  },
    {
        label: "한국사",
        color: "#333333",
        radius: 80,
        id: "id5",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(91%) sepia(87%) saturate(4870%) hue-rotate(335deg) brightness(108%) contrast(91%)",
        btn: "btn5()"
  },
    {
        label: "그림책",
        color: "#f2f2f2",
        radius: 70,
        id: "id6",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(44%) sepia(13%) saturate(260%) hue-rotate(225deg) brightness(93%) contrast(89%)",
        btn: "btn5()"
  },
    {
        label: "여행",
        color: "#333333",
        radius: 50,
        id: "id7",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(91%) sepia(87%) saturate(4870%) hue-rotate(335deg) brightness(108%) contrast(91%)",
        btn: "btn5()"
  },
    {
        label: "생명과학",
        color: "#333333",
        radius: 40,
        id: "id8",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(91%) sepia(87%) saturate(4870%) hue-rotate(335deg) brightness(108%) contrast(91%)",
        btn: "btn5()"
  },
    {
        label: "명언",
        color: "#f2f2f2",
        radius: 45,
        id: "id9",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(44%) sepia(13%) saturate(260%) hue-rotate(225deg) brightness(93%) contrast(89%)",
        btn: "btn5()"
  },
    {
        label: "철학",
        color: "#333333",
        radius: 90,
        id: "id10",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(91%) sepia(87%) saturate(4870%) hue-rotate(335deg) brightness(108%) contrast(91%)",
        btn: "btn5()"
  },
    {
        label: "고전",
        color: "#f2f2f2",
        radius: 100,
        id: "id11",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(44%) sepia(13%) saturate(260%) hue-rotate(225deg) brightness(93%) contrast(89%)",
        btn: "btn5()"
  },
    {
        label: "예술",
        color: "#333333",
        radius: 80,
        id: "id12",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(91%) sepia(87%) saturate(4870%) hue-rotate(335deg) brightness(108%) contrast(91%)",
        btn: "btn5()"
  },
    {
        label: "사회과학",
        color: "#333333",
        radius: 70,
        id: "id13",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(91%) sepia(87%) saturate(4870%) hue-rotate(335deg) brightness(108%) contrast(91%)",
        btn: "btn5()"
  },
    {
        label: "IT",
        color: "#f2f2f2",
        radius: 50,
        id: "id14",
        link: "../../img/page/book/paper.jpg",
        blend: "invert(44%) sepia(13%) saturate(260%) hue-rotate(225deg) brightness(93%) contrast(89%)",
        btn: "btn5()"
  }
]



const nodes = data.map(d => ({
    ...d,
    radius: d.radius
}))


const svg = d3.select("div#container")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", [0, 0, 500, 500])
    .classed("svg-content", true)
    .attr('width', 1560)
    .attr('height', 300)



function handleClick(d, i) {

    d3.event.stopPropagation()

    console.log(this)

    d3.event.preventDefault();

    d3.selectAll("g").on("click", function (d, i, nodes) {
        //check if node is already selected
        var circle = d3.select(this).selectAll("circle");
        var div = d3.select('#div').append("p").html("<span>" + d.label + "</span>)");

        if (circle.classed("active")) {
            circle.classed("active", false);

        } else {
            circle.classed("active", true);
        }
    });
    //  d3.select(this)
    //     .select('circle')
    //     .attr("class","active")

    console.log('changed style!', d)
}


const node = svg
    .selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .on("click", handleClick)
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
    .attr('class', d => d.id)
    .attr('data-txt', d => d.label)






const defs = node
    .append("defs")
    .append("pattern")
    .attr("id", d => d.id)
    .attr("height", "1")
    .attr("width", "1")
    .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 1)
    .attr("width", 1)
    .attr("preserveAspectRatio", "xMinYMin slice")
    .attr("xlink:xlink:href", d => d.link)

const circle = node
    .append('circle')
    .attr('r', d => d.radius)
    .attr("fill", d => "url(#" + d.id + ")")
    .attr("filter", d => d.blend)
    .style('cursor', 'pointer')
    .style('transition-duration', '1s')


const text = node
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.3em')
    .style('pointer-events', 'none')
    .style('user-select', 'none')
    .style('fill', '#fff')
    .text(d => d.label)
    .attr('class', 'name')

const ticked = _ => {
    node.attr("transform", d => `translate(${d.x * 2.3}, ${d.y*0.4})`)
}

const simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-20))
    .force('center', d3.forceCenter(500,500))
    .force('collision', d3.forceCollide().radius(d => d.radius + 20))
    .force("y", d3.forceY(0))
    .force("x", d3.forceX(0))
    .on('tick', ticked)

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.4).restart()
    d.fx = d.x
    d.fy = d.y
}

function dragged(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0)
    d.fx = null
    d.fy = null
}




$(function () {


});


//const imageElement = document.getElementById('main-image')
//const backgroundImage = imageElement.getAttribute('data-txt')
//const containerElement = document.getElementById('myDiv')

//function handleClick(d) {
//    if (!d3.event.active) containerElement.innerHTML += `<h3 id = "username" //class="racenames">${backgroundImage}</h3>`

//}
