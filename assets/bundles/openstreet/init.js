(function () {
    function init() {
        const map = new ol.Map({
            view: new ol.View({
                // center: [0, 0],
                center: ol.proj.fromLonLat([11.54094, 48.12653, ]),
                zoom: 18
            }),
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM
                })
            ],
            target: "basic-map"
        });
    }
    init();
} () );

// 481265393,115409431,