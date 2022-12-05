 
$diy = $('.number-diy .data');
$diy.rollNumber({
  number: $diy[0].dataset.number, 
  speed: 600, 
  interval: 200,
  rooms: 5,
  space: 40,
  symbol: '', 
  fontStyle: {
    'font-size': 32,
    'line-height': 40,
  }
})


