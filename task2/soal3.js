const number = [12,45,62,99,12,12,62,62,84,35,12];
//MEAN 
function mean(angka){
  var jumlah=angka.reduce((a, b) => a + b, 0)
  var banyak =angka.length
  var mean= jumlah/banyak
  return mean;
}

//MMEEDDIIAANN
function median(angka){

  var urut=angka.sort(function(a, b){return a-b})
  var bagi2=(urut.length/2)
  var mod=urut.length%2
  var hasil
  var ganjilgenap
    if ( mod == 1){ 
                    hasil=bagi2+0.5-1
                    ganjilgenap=(urut[hasil]) 
                  }
    else{ 
          hasil=bagi2
          ganjilgenap=(urut.slice(hasil-1,hasil+1))   
        }
return ganjilgenap;
}



//MMOODDUUSS
  function mode(numbers) {

  //declare variable
  var modes = []
  var count = []
  var number
  var maxIndex = 0

  //looping by arraylength
  for (i = 0; i < numbers.length; i += 1) {

      number = numbers[i];

      count[number] = (count[number] || 0) + 1;

      if (count[number] > maxIndex) {
          maxIndex = count[number];
      }
  }

  for (i in count){
          if (count[i]!== null) {
            
              if (count[i] === maxIndex) {
                  modes.push(Number(i));
              }
          }
        }
  return modes;
}

console.log(number) //echo all array
// console.log(mean(number)) //mean rata rata
// console.log(number.sort(function(a, b){return a-b}))
// console.log(median(number)) //median nilai tengah
console.log(mode(number)) //modus