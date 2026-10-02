var wms_layers = [];


var lyr_OpenFreeMap_0 = new ol.layer.Group({
    title: 'OpenFreeMap',
    type: '',
    combine: true,
});
olms.apply(lyr_OpenFreeMap_0, 'https://tiles.openfreemap.org/styles/liberty');

var format_railways_1 = new ol.format.GeoJSON();
var features_railways_1 = format_railways_1.readFeatures(json_railways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_1.addFeatures(features_railways_1);
var lyr_railways_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railways_1, 
                style: style_railways_1,
                popuplayertitle: 'railways',
                interactive: true,
                title: '<img src="styles/legend/railways_1.png" /> railways'
            });
var format_bf_malenteeutin_4km_2 = new ol.format.GeoJSON();
var features_bf_malenteeutin_4km_2 = format_bf_malenteeutin_4km_2.readFeatures(json_bf_malenteeutin_4km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bf_malenteeutin_4km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bf_malenteeutin_4km_2.addFeatures(features_bf_malenteeutin_4km_2);
var lyr_bf_malenteeutin_4km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bf_malenteeutin_4km_2, 
                style: style_bf_malenteeutin_4km_2,
                popuplayertitle: 'bf_malente+eutin_4km',
                interactive: true,
                title: '<img src="styles/legend/bf_malenteeutin_4km_2.png" /> bf_malente+eutin_4km'
            });
var format_InteressanteGebude_3 = new ol.format.GeoJSON();
var features_InteressanteGebude_3 = format_InteressanteGebude_3.readFeatures(json_InteressanteGebude_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InteressanteGebude_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InteressanteGebude_3.addFeatures(features_InteressanteGebude_3);
var lyr_InteressanteGebude_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InteressanteGebude_3, 
                style: style_InteressanteGebude_3,
                popuplayertitle: 'InteressanteGebäude',
                interactive: true,
                title: '<img src="styles/legend/InteressanteGebude_3.png" /> InteressanteGebäude'
            });

lyr_OpenFreeMap_0.setVisible(true);lyr_railways_1.setVisible(true);lyr_bf_malenteeutin_4km_2.setVisible(true);lyr_InteressanteGebude_3.setVisible(true);
var layersList = [lyr_OpenFreeMap_0,lyr_railways_1,lyr_bf_malenteeutin_4km_2,lyr_InteressanteGebude_3];
lyr_railways_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_bf_malenteeutin_4km_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_InteressanteGebude_3.set('fieldAliases', {'id': 'id', });
lyr_railways_1.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_bf_malenteeutin_4km_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_InteressanteGebude_3.set('fieldImages', {'id': 'TextEdit', });
lyr_railways_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_bf_malenteeutin_4km_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_InteressanteGebude_3.set('fieldLabels', {'id': 'no label', });
lyr_InteressanteGebude_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});