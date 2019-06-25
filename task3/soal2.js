var numbers = [123,9,27];

var total=''

while (numbers.length !=1) {

//menjumlahkan semua array 159,15,6
total = numbers.reduce((a, b) => a + b, 0)

//merubah angka menjadi array baru [1,5,9] ,[1,5]
numbers =Array.from(String(total), Number);


}
//merecord panjang array 3,2,1
var panjang = numbers.length

console.log(numbers)