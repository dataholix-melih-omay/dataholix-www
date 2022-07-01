(function () {
    function init() {
        const latLonCoordinate = [11.54094, 48.12653 ];
        const latLonCenter = ol.proj.fromLonLat(latLonCoordinate);
        const view = new ol.View({
            enableRotation: false,
            enableZoom: false,
            center: latLonCenter,
            zoom: 18
        });

        const markers = new ol.layer.Vector({
            title: 'dataholix solutions GmbH',
            source: new ol.source.Vector(),
            style: new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 1],
                    src: 'assets/bundles/openstreet/marker.png'
                })
            })
        });

        const map = new ol.Map({
            view: view,
            interactions: [],
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM
                })
            ],
            target: "basic-map",
            controls: ol.control.defaults({
                zoom: true
            })
        });


        map.addLayer(markers);
        const marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat(latLonCoordinate)));
        markers.getSource().addFeature(marker);
    }
    init();
} () );
