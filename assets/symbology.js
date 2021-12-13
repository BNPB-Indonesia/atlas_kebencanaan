/*Render Symbology*/
// 1. icon BNPB
var icon_bnpb = L.icon({
    iconUrl: 'https://gis.bnpb.go.id/images/Logo-BNPB_bulat.png',
    iconSize: [12, 12],
    iconAnchor: [13.5, 17.5],
    popupAnchor: [0, -11]
});

// 2. icon BNPB
var fa_bell = L.divIcon({
    html: '<i class="fa fa-bell" style="color: #006666"></i>',
    iconSize: [16, 16],
    shadowSize: [40, 40],
    iconAnchor: [13.5, 17.5],
    className: 'myDivIcon'
});
var fa_bell_hv = L.divIcon({
    html: '<i class="fa fa-bell" style="color: blue"></i>',
    iconSize: [16, 16],
    shadowSize: [40, 40],
    iconAnchor: [13.5, 17.5],
    className: 'myDivIcon'
});

var fa_bullhorn = L.divIcon({
    html: '<i class="fa fa-bullhorn" style="color: #34568b"></i>',
    iconSize: [16, 16],
    shadowSize: [40, 40],
    iconAnchor: [13.5, 17.5],
    className: 'myDivIcon'
});
var fa_bullhorn_hv = L.divIcon({
    html: '<i class="fa fa-bullhorn" style="color: blue"></i>',
    iconSize: [16, 16],
    shadowSize: [40, 40],
    iconAnchor: [13.5, 17.5],
    className: 'myDivIcon'
});

var fa_broadcast_tower = L.divIcon({
    html: '<i class="fa fa-broadcast-tower" style="color: red"></i>',
    iconSize: [16, 16],
    shadowSize: [40, 40],
    iconAnchor: [13.5, 17.5],
    className: 'myDivIcon'
});
var fa_broadcast_tower_hv = L.divIcon({
    html: '<i class="fa fa-broadcast-tower" style="color: blue"></i>',
    iconSize: [28, 28],
    shadowSize: [40, 40],
    iconAnchor: [13.5, 17.5],
    className: 'myDivIcon'
});

function getColor_renkon(d) {
  return d == 0  ? 'white' :
         d >= 1 && d < 3  ? 'red' :
         d >= 3 ? 'green' :
                   '#000000' ;
}

function getColor_pusdalops(d) {
  return d == 'Terbentuk'  ? 'green' :'red' ;
}

function renkon_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.total),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function renkon_prov_resetHighlight(e) {
  renkon_prov.setStyle(renkon_style);
}

function renkon_prov_highlightFeature(e) {
  renkon_prov_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function renkon_prov_onEachFeature(feature, layer) {
  layer.on({
    mouseover: renkon_prov_highlightFeature,
    mouseout: renkon_prov_resetHighlight
  });
}

function renkon_kab_resetHighlight(e) {
  renkon_kab.setStyle(renkon_style);
}

function renkon_kab_highlightFeature(e) {
  renkon_kab_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function renkon_kab_onEachFeature(feature, layer) {
  layer.on({
    mouseover: renkon_kab_highlightFeature,
    mouseout: renkon_kab_resetHighlight
  });
}

function deputi5_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.tot_listrk),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_0_resetHighlight(e) {
  deputi5_0.setStyle(deputi5_style);
}

function deputi5_0_highlightFeature(e) {
  deputi5_0_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_0_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_0_highlightFeature,
    mouseout: deputi5_0_resetHighlight
  });
}

function deputi5_1_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.chainsaw),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_1_resetHighlight(e) {
  deputi5_1.setStyle(deputi5_1_style);
}

function deputi5_1_highlightFeature(e) {
  deputi5_1_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_1_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_1_highlightFeature,
    mouseout: deputi5_1_resetHighlight
  });
}

function deputi5_2_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.tot_api),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_2_resetHighlight(e) {
  deputi5_2.setStyle(deputi5_2_style);
}

function deputi5_2_highlightFeature(e) {
  deputi5_2_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_2_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_2_highlightFeature,
    mouseout: deputi5_2_resetHighlight
  });
}

function deputi5_3_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.tot_air),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_3_resetHighlight(e) {
  deputi5_3.setStyle(deputi5_3_style);
}

function deputi5_3_highlightFeature(e) {
  deputi5_3_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_3_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_3_highlightFeature,
    mouseout: deputi5_3_resetHighlight
  });
}

function deputi5_4_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.grand_tota),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_4_resetHighlight(e) {
  deputi5_4.setStyle(deputi5_4_style);
}

function deputi5_4_highlightFeature(e) {
  deputi5_4_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_4_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_4_highlightFeature,
    mouseout: deputi5_4_resetHighlight
  });
}

function deputi5_5_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.tot_kend_d),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_5_resetHighlight(e) {
  deputi5_5.setStyle(deputi5_5_style);
}

function deputi5_5_highlightFeature(e) {
  deputi5_5_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_5_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_5_highlightFeature,
    mouseout: deputi5_5_resetHighlight
  });
}

function deputi5_6_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.tot_perahu),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_6_resetHighlight(e) {
  deputi5_6.setStyle(deputi5_6_style);
}

function deputi5_6_highlightFeature(e) {
  deputi5_6_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_6_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_6_highlightFeature,
    mouseout: deputi5_6_resetHighlight
  });
}

function deputi5_7_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.velbed),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_7_resetHighlight(e) {
  deputi5_7.setStyle(deputi5_7_style);
}

function deputi5_7_highlightFeature(e) {
  deputi5_7_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_7_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_7_highlightFeature,
    mouseout: deputi5_7_resetHighlight
  });
}

function deputi5_8_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.water_trea),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_8_resetHighlight(e) {
  deputi5_8.setStyle(deputi5_8_style);
}

function deputi5_8_highlightFeature(e) {
  deputi5_8_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_8_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_8_highlightFeature,
    mouseout: deputi5_8_resetHighlight
  });
}

function deputi5_9_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.grand_tota),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_9_resetHighlight(e) {
  deputi5_9.setStyle(deputi5_9_style);
}

function deputi5_9_highlightFeature(e) {
  deputi5_9_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_9_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_9_highlightFeature,
    mouseout: deputi5_9_resetHighlight
  });
}

function deputi5_10_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.chainsaw),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_10_resetHighlight(e) {
  deputi5_10.setStyle(deputi5_10_style);
}

function deputi5_10_highlightFeature(e) {
  deputi5_10_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_10_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_10_highlightFeature,
    mouseout: deputi5_10_resetHighlight
  });
}

function deputi5_11_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.grand_tota),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_11_resetHighlight(e) {
  deputi5_11.setStyle(deputi5_11_style);
}

function deputi5_11_highlightFeature(e) {
  deputi5_11_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_11_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_11_highlightFeature,
    mouseout: deputi5_11_resetHighlight
  });
}

function deputi5_12_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.sar_permuk),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_12_resetHighlight(e) {
  deputi5_12.setStyle(deputi5_12_style);
}

function deputi5_12_highlightFeature(e) {
  deputi5_12_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_12_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_12_highlightFeature,
    mouseout: deputi5_12_resetHighlight
  });
}

function deputi5_13_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.grand_tota),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_13_resetHighlight(e) {
  deputi5_13.setStyle(deputi5_13_style);
}

function deputi5_13_highlightFeature(e) {
  deputi5_13_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_13_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_13_highlightFeature,
    mouseout: deputi5_13_resetHighlight
  });
}

function deputi5_14_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.grand_tota),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_14_resetHighlight(e) {
  deputi5_14.setStyle(deputi5_14_style);
}

function deputi5_14_highlightFeature(e) {
  deputi5_14_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_14_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_14_highlightFeature,
    mouseout: deputi5_14_resetHighlight
  });
}

function deputi5_15_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.toilet_por),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_15_resetHighlight(e) {
  deputi5_15.setStyle(deputi5_15_style);
}

function deputi5_15_highlightFeature(e) {
  deputi5_15_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_15_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_15_highlightFeature,
    mouseout: deputi5_15_resetHighlight
  });
}

function deputi5_16_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.motor+feature.properties.mobil+feature.properties.truk),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_16_resetHighlight(e) {
  deputi5_16.setStyle(deputi5_16_style);
}

function deputi5_16_highlightFeature(e) {
  deputi5_16_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_16_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_16_highlightFeature,
    mouseout: deputi5_16_resetHighlight
  });
}

function deputi5_17_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.grand_tota),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_17_resetHighlight(e) {
  deputi5_17.setStyle(deputi5_17_style);
}

function deputi5_17_highlightFeature(e) {
  deputi5_17_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_17_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_17_highlightFeature,
    mouseout: deputi5_17_resetHighlight
  });
}

function deputi5_18_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.velbed),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_18_resetHighlight(e) {
  deputi5_18.setStyle(deputi5_18_style);
}

function deputi5_18_highlightFeature(e) {
  deputi5_18_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_18_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_18_highlightFeature,
    mouseout: deputi5_18_resetHighlight
  });
}

function deputi5_19_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.water_trea),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function deputi5_19_resetHighlight(e) {
  deputi5_19.setStyle(deputi5_19_style);
}

function deputi5_19_highlightFeature(e) {
  deputi5_19_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function deputi5_19_onEachFeature(feature, layer) {
  layer.on({
    mouseover: deputi5_19_highlightFeature,
    mouseout: deputi5_19_resetHighlight
  });
}

function pusdalops_0_style(feature) {
  return {
    fillColor: getColor_pusdalops(feature.properties.status),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function pusdalops_0_resetHighlight(e) {
  pusdalops_0.setStyle(pusdalops_0_style);
}

function pusdalops_0_highlightFeature(e) {
  pusdalops_0_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function pusdalops_0_onEachFeature(feature, layer) {
  layer.on({
    mouseover: pusdalops_0_highlightFeature,
    mouseout: pusdalops_0_resetHighlight
  });
}

function pusdalops_1_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.total),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function pusdalops_1_resetHighlight(e) {
  pusdalops_1.setStyle(pusdalops_1_style);
}

function pusdalops_1_highlightFeature(e) {
  pusdalops_1_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function pusdalops_1_onEachFeature(feature, layer) {
  layer.on({
    mouseover: pusdalops_1_highlightFeature,
    mouseout: pusdalops_1_resetHighlight
  });
}

function pusdalops_2_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.total),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function pusdalops_2_resetHighlight(e) {
  pusdalops_2.setStyle(pusdalops_2_style);
}

function pusdalops_2_highlightFeature(e) {
  pusdalops_2_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function pusdalops_2_onEachFeature(feature, layer) {
  layer.on({
    mouseover: pusdalops_2_highlightFeature,
    mouseout: pusdalops_2_resetHighlight
  });
}

function pusdatinkk_0_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.tot_kom),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function pusdatinkk_0_resetHighlight(e) {
  pusdatinkk_0.setStyle(pusdatinkk_0_style);
}

function pusdatinkk_0_highlightFeature(e) {
  pusdatinkk_0_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function pusdatinkk_0_onEachFeature(feature, layer) {
  layer.on({
    mouseover: pusdatinkk_0_highlightFeature,
    mouseout: pusdatinkk_0_resetHighlight
  });
}

function pusdatinkk_1_style(feature) {
  return {
    fillColor: getColor_renkon(feature.properties.grand_tota),
    weight: 1,
    opacity: 0.7,
    fillOpacity: 0.8
  };
}

function pusdatinkk_1_resetHighlight(e) {
  pusdatinkk_1.setStyle(pusdatinkk_1_style);
}

function pusdatinkk_1_highlightFeature(e) {
  pusdatinkk_1_resetHighlight(e);
  var layer = e.target;
  layer.setStyle({
    weight: 4,
    color: 'black',
    fillOpacity: 0.9
  });
}

function pusdatinkk_1_onEachFeature(feature, layer) {
  layer.on({
    mouseover: pusdatinkk_1_highlightFeature,
    mouseout: pusdatinkk_1_resetHighlight
  });
}

