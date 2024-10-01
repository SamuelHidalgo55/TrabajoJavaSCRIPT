let options={
    enableHighAccuracy: true, 
    timeout: 5000, 
    maximunAge: 0 
}

if(navigator.geolocation){ 
    navigator.geolocation.getCurrentPosition(succes, error, options);
    
}else{
    alert("Los servicios de geocalización no están disponibles");
}

function succes(position){
    let latitude= position.coords.latitude;
    let longitude= position.coords.longitude;

    let map= L.map("map", {
        center:[latitude,longitude],
        zoom: 10
    })  
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'MiOpenStreetMap'
    }).addTo(map)


    let control= L.Routing.control({ 
       waypoints:[
        L.latLng(latitude, longitude),    
        L.latLng(37.376718, -5.953887 )  
        ],
        language: "es",   
          
    }).addTo(map);
    
              
}

function error(){

}
