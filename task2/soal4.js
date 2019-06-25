var databuku = [
    {
        title: 'Hunger Games',
        isBorrowed: true,
    },
    {
        title: 'Harry Potter',
        isBorrowed: false,
    },
    {
        title: 'Assassins Creed',
        isBorrowed: true,
    },
    {
        title: 'Percy Jackson',
        isBorrowed: false,
    },
    {
        title: 'Fifty Shades of Grey',
        isBorrowed: true,
    },
    ];
// 4.A
console.table(databuku[1]) 
console.table(databuku[('Hunger Games')]) 

// 4.B
const statusnya = databuku.filter(function(disewa) {

    if(disewa.isBorrowed == true ) {
      return true // simpan data!
    }
    })

  // print data di terminal menjadi table.
    //console.table(statusnya)
