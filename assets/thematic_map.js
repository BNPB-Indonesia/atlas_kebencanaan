/*Render Thematic Map Layers*/

// 1. Deputi 1
var TEWS = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI1/MapServer/0',
    pointToLayer: function (geojson, latlng) {
      return L.marker(latlng, {
        icon: fa_broadcast_tower
      });
    },
    onEachFeature: function(feature,layer)
            {
            layer.on('mouseover',function(){
                layer.setIcon(fa_broadcast_tower_hv)
            });
            layer.on('mouseout',function(){
                layer.setIcon(fa_broadcast_tower)
            });
            }
  });
  
  TEWS.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kabupaten_}</strong> <br> Total TEWS : {total} buah.</p>', layer.feature.properties);
  });

var LEWS = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI1/MapServer/1',
    pointToLayer: function (geojson, latlng) {
      return L.marker(latlng, {
        icon: fa_bullhorn
      });
    },
    onEachFeature: function(feature,layer)
            {
            layer.on('mouseover',function(){
                layer.setIcon(fa_bullhorn_hv)
            });
            layer.on('mouseout',function(){
                layer.setIcon(fa_bullhorn)
            });
            }
  });
  
  LEWS.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota}</strong> <br> Total LEWS : {total} buah.</p>', layer.feature.properties);
  });

var FEWS = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI1/MapServer/2',
    pointToLayer: function (geojson, latlng) {
      return L.marker(latlng, {
        icon: fa_bell
      });
    },
    onEachFeature: function(feature,layer)
            {
            layer.on('mouseover',function(){
                layer.setIcon(fa_bell_hv)
            });
            layer.on('mouseout',function(){
                layer.setIcon(fa_bell)
            });
            }
  });
  
  FEWS.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota}</strong> <br> Total FEWS : {total} buah.</p>', layer.feature.properties);
  });


// 2. Deputi 2
var renkon_kab = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI2/MapServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: renkon_style,
    onEachFeature: renkon_kab_onEachFeature
  });
  renkon_kab.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Total Renkon : {total} buah.</p>', layer.feature.properties);
  });

var renkon_prov = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI2/MapServer/1',
    simplifyFactor: 0.5,
    precision: 5,
    style: renkon_style,
    onEachFeature: renkon_prov_onEachFeature
  });
  renkon_prov.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {provinsi}</strong> <br> Total Renkon : {total} buah.</p>', layer.feature.properties);
  });

// 3. Deputi 3

// 4. Deputi 4

// 5. Deputi 5
var deputi5_0 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_style,
    onEachFeature: deputi5_0_onEachFeature
  });
  deputi5_0.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Total Alat Listirik : {tot_listrk} buah.</p>', layer.feature.properties);
  });

var deputi5_1 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/1',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_1_style,
    onEachFeature: deputi5_1_onEachFeature
  });
  deputi5_0.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Total Chainsaw : {chainshaw} buah.</p>', layer.feature.properties);
  });

var deputi5_2 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/2',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_2_style,
    onEachFeature: deputi5_2_onEachFeature
  });
  deputi5_2.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Total Pemadam : {tot_api} buah.</p>', layer.feature.properties);
  });

var deputi5_3 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/3',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_3_style,
    onEachFeature: deputi5_3_onEachFeature
  });
  deputi5_3.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Total Penyimpan Air : {tot_air} buah.</p>', layer.feature.properties);
  });

var deputi5_4 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/4',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_4_style,
    onEachFeature: deputi5_4_onEachFeature
  });
  deputi5_4.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Bantuan Tenda : {grand_tota} buah.</p>', layer.feature.properties);
  });

var deputi5_5 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/5',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_5_style,
    onEachFeature: deputi5_5_onEachFeature
  });
  deputi5_5.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Bantuan Kendaraan Darat : {tot_kend_d} buah.</p>', layer.feature.properties);
  });

var deputi5_6 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/6',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_6_style,
    onEachFeature: deputi5_6_onEachFeature
  });
  deputi5_6.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Bantuan Transportasi Air : {tot_perahu} buah.</p>', layer.feature.properties);
  });

var deputi5_7 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/7',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_7_style,
    onEachFeature: deputi5_7_onEachFeature
  });
  deputi5_7.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Bantuan Velbed : {velbed} buah.</p>', layer.feature.properties);
  });

var deputi5_8 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/8',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_8_style,
    onEachFeature: deputi5_8_onEachFeature
  });
  deputi5_8.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Kab. {kab_kota_g}</strong> <br> Bantuan WTP : {water_trea} buah.</p>', layer.feature.properties);
  });

var deputi5_9 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/9',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_9_style,
    onEachFeature: deputi5_9_onEachFeature
  });
  deputi5_9.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Alat Listrik : {grand_tota} buah.</p>', layer.feature.properties);
  });

var deputi5_10 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/10',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_10_style,
    onEachFeature: deputi5_10_onEachFeature
  });
  deputi5_10.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Chainsaw : {chainsaw} buah.</p>', layer.feature.properties);
  });

var deputi5_11 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/11',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_11_style,
    onEachFeature: deputi5_11_onEachFeature
  });
  deputi5_11.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Pemadam Api : {grand_tota} buah.</p>', layer.feature.properties);
  });

var deputi5_12 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/12',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_12_style,
    onEachFeature: deputi5_12_onEachFeature
  });
  deputi5_12.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan SARPMK : {sar_permuk} buah.</p>', layer.feature.properties);
  });

var deputi5_13 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/13',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_13_style,
    onEachFeature: deputi5_13_onEachFeature
  });
  deputi5_13.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Penyimpan Air : {grand_tota} buah.</p>', layer.feature.properties);
  });

var deputi5_14 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/14',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_14_style,
    onEachFeature: deputi5_14_onEachFeature
  });
  deputi5_14.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Tenda : {grand_tota} buah.</p>', layer.feature.properties);
  });

var deputi5_15 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/15',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_15_style,
    onEachFeature: deputi5_15_onEachFeature
  });
  deputi5_15.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Tenda : {toilet_por} buah.</p>', layer.feature.properties);
  });

var deputi5_16 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/16',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_16_style,
    onEachFeature: deputi5_16_onEachFeature
  });
  deputi5_16.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Kendaraan : <br> Motor ={motor} unit <br> Mobil = {mobil} unit <br> Truk = {truk} unit.</p>', layer.feature.properties);
  });

var deputi5_17 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/17',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_17_style,
    onEachFeature: deputi5_17_onEachFeature
  });
  deputi5_17.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Transportasi Air : {grand_tota} buah.</p>', layer.feature.properties);
  });

var deputi5_18 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/18',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_18_style,
    onEachFeature: deputi5_18_onEachFeature
  });
  deputi5_18.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan Velbed : {velbed} buah.</p>', layer.feature.properties);
  });

var deputi5_19 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_DEPUTI5/MapServer/19',
    simplifyFactor: 0.5,
    precision: 5,
    style: deputi5_19_style,
    onEachFeature: deputi5_19_onEachFeature
  });
  deputi5_19.bindPopup(function (layer) {
    return L.Util.template('<p><strong>Prov. {provinsi}</strong> <br> Bantuan WTP : {water_trea} buah.</p>', layer.feature.properties);
  });


//Pusdalops
var pusdalops_0 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_PUSDALOPS/MapServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: pusdalops_0_style,
    onEachFeature: pusdalops_0_onEachFeature
  });
  pusdalops_0.bindPopup(function (layer) {
    return L.Util.template('<p><strong>{kab_kota_g}</strong> <br> Status : {status} <br> Alamat : {alamat} <br> Kontak : {kontak}.</p>', layer.feature.properties);
  });

var pusdalops_1 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_PUSDALOPS/MapServer/1',
    simplifyFactor: 0.5,
    precision: 5,
    style: pusdalops_1_style,
    onEachFeature: pusdalops_1_onEachFeature
  });
  pusdalops_1.bindPopup(function (layer) {
    return L.Util.template('<p><strong>{provinsi}</strong> <br> Jumlah Ketersediaan Renkon : {total} <br> Jumlah Pusdalops : {jm_pdalops}.</p>', layer.feature.properties);
  });

var pusdalops_2 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_PUSDALOPS/MapServer/2',
    simplifyFactor: 0.5,
    precision: 5,
    style: pusdalops_2_style,
    onEachFeature: pusdalops_2_onEachFeature
  });
  pusdalops_2.bindPopup(function (layer) {
    return L.Util.template('<p><strong>{kab_kota_g}</strong> <br> Jumlah Ketersediaan Renkon : {total} <br> Jumlah Pusdalops : {jm_pdalops}.</p>', layer.feature.properties);
  });

//Pusdatinkk
var pusdatinkk_0 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_PUSDATINKK/MapServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: pusdatinkk_0_style,
    onEachFeature: pusdatinkk_0_onEachFeature
  });
  pusdatinkk_0.bindPopup(function (layer) {
    return L.Util.template('<p><strong>{kab_kota_g}</strong> <br> HT : {handy_talk} <br> Radio : {radio_komu} <br> RIG : {rig} <br> SSB : {ssb} <br> Total : {tot_kom}.</p>', layer.feature.properties);
  });

var pusdatinkk_1 = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/ATLAS/ATLAS_PUSDATINKK/MapServer/1',
    simplifyFactor: 0.5,
    precision: 5,
    style: pusdatinkk_1_style,
    onEachFeature: pusdatinkk_1_onEachFeature
  });
  pusdatinkk_1.bindPopup(function (layer) {
    return L.Util.template('<p><strong>{provinsi}</strong> <br> Alat Komunikasi : {alat_komun} <br> HT : {handy_talk} <br> Radio : {radio} <br> RIG : {rig} <br> Total : {grand_tota}.</p>', layer.feature.properties);
  });



var covid = L.esri.featureLayer({
    url: 'https://gis.bnpb.go.id/server/rest/services/covid19/covid19_per_provinsi_danang/MapServer/0',
    simplifyFactor: 0.5,
    precision: 5,
    style: function (feature) {
      if (feature.properties.Positif < 5000) {
        return { color: 'green', weight: 2 };
      } else if (feature.properties.Positif > 5000 && feature.properties.Positif < 10000) {
        return { color: 'yellow', weight: 2 };
      } else {
        return { color: 'red', weight: 2 };
      }
    }
  });



var pilih_basemap = L.control.layers(null, basemaps, {position: 'bottomright'}).addTo(map);

