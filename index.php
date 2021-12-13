<?php 
 include '_loader.php';
 if(isset($_GET['halaman'])){
    $halaman=$_GET['halaman'];
  }
  else{
    $halaman='beranda';
  }
  ob_start();
  $file='_halaman/'.$halaman.'.php';
  if(!file_exists($file)){
    include '_halaman/error.php';
  }
  else{
    include $file;
  }
  $halaman = ob_get_contents();
  ob_end_clean();
?>

<!DOCTYPE html>
<html lang="id">
<?php include '_layouts/head.php'?>
<body>
<div class="wrapper">
<?php
  echo $halaman;
  include '_layouts/header.php';
  include '_layouts/menu_utama.php';
  include '_divisi/deputi1.php';
  include '_divisi/deputi2.php';
  include '_divisi/deputi3.php';
  include '_divisi/deputi4.php';
  include '_divisi/deputi5.php';
  include '_divisi/pusdatin.php';
  include '_divisi/pusdiklat.php';
  include '_divisi/pusdalops.php';
  include '_divisi/settama.php';
  include '_layouts/map.php';
  include '_layouts/modal.php';
?>
<script src="http://localhost:8082/atlas_temp/assets/main1.js"></script>
<script src="http://localhost:8082/atlas_temp/assets/map.js"></script>
<script src="http://localhost:8082/atlas_temp/assets/symbology.js"></script>
<script src="http://localhost:8082/atlas_temp/assets/thematic_map.js"></script>
<script src="http://localhost:8082/atlas_temp/assets/switch.js"></script>
</div>
</body>
</html>