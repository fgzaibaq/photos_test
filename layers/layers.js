var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_test4better_birmingham_historic_photos4_1 = new ol.format.GeoJSON();
var features_test4better_birmingham_historic_photos4_1 = format_test4better_birmingham_historic_photos4_1.readFeatures(json_test4better_birmingham_historic_photos4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test4better_birmingham_historic_photos4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test4better_birmingham_historic_photos4_1.addFeatures(features_test4better_birmingham_historic_photos4_1);
var lyr_test4better_birmingham_historic_photos4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test4better_birmingham_historic_photos4_1, 
                style: style_test4better_birmingham_historic_photos4_1,
                popuplayertitle: 'test4 — better_birmingham_historic_photos4',
                interactive: true,
                title: '<img src="styles/legend/test4better_birmingham_historic_photos4_1.png" /> test4 — better_birmingham_historic_photos4'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_test4better_birmingham_historic_photos4_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_test4better_birmingham_historic_photos4_1];
lyr_test4better_birmingham_historic_photos4_1.set('fieldAliases', {'fid': 'fid', 'Image ID': 'Image ID', 'Name': 'Name', 'Year': 'Year', 'Address': 'Address', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Image URL': 'Image URL', 'Archive URL': 'Archive URL', });
lyr_test4better_birmingham_historic_photos4_1.set('fieldImages', {'fid': 'TextEdit', 'Image ID': 'Range', 'Name': 'TextEdit', 'Year': 'Range', 'Address': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Image URL': 'ExternalResource', 'Archive URL': 'TextEdit', });
lyr_test4better_birmingham_historic_photos4_1.set('fieldLabels', {'fid': 'no label', 'Image ID': 'no label', 'Name': 'no label', 'Year': 'no label', 'Address': 'no label', 'Status': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Image URL': 'no label', 'Archive URL': 'no label', });
lyr_test4better_birmingham_historic_photos4_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});