var matrix = [  
                [1,4,7],
                [2,5,8],
                [3,6,9]
            ]

function transpose(a) {

    // Calculate the width and height of the Array
    if (a[0] instanceof Array ) {
        a[0].length
    } else {
        0
    }
    var lebar  = a.length || 0;
    var tinggi = ''
    if (a[0] instanceof Array ) {
        tinggi = a[0].length
    } else {
        tinggi = 0
    }
    
    
    // In case it is a zero matrix, no transpose routine needed.
    if(tinggi === 0 || lebar === 0) {
            return []; }

    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];

    // Loop through every item in the outer array (height)
    for(i=0; i<tinggi; i++) {

    // Insert a new row (array)
        t[i] = [];

    // Loop through every item per item in outer array (width)
            for(j=0; j<lebar; j++) {

                // Save transposed data.
                t[i][j] = a[j][i];
            }
    }

    // return t;
    return t;
}

console.log(transpose(matrix));