let us_center_coord=[39.8283, -98.5795]
let zoomLevel=4

bridges=[
    {name:"Verrazano-Narrows Bridge", length:"1298.4", coord:[40.6066, -74.0447], icon:"bridge_icon_l"},
    {name:"Golden Gate Bridge", length:"1280.2", coord:[37.8199, -122.4783], icon:"bridge_icon"},
    {name:"Mackinac Bridge", length:"1158", coord:[45.8174, -84.7278], icon:"bridge_icon"},
    {name:"George Washington Bridge", length:"1067", coord:[40.8517, -73.9527], icon:"bridge_icon"},
    {name:"Tacoma Narrows Bridge", length:"853.44", coord:[47.2690, -122.5517], icon:"bridge_icon"}
]

var bridge_icon = L.icon({
    iconUrl: 'icon.png',
    iconSize: [20,20]
})

var bridge_icon_l = L.icon({
    iconUrl: 'icon_longest.png',
    iconSize: [20,20]
})

let map = L.map("bridge_map").setView(us_center_coord, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

bridges.forEach(
    bridge => {
        L.marker(bridge.coord, {icon:eval(bridge.icon)})
            .bindPopup(`${bridge.name}</br>Span: ${bridge.length} meters`)
            .addTo(map)
    }
)

