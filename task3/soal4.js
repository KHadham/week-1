var mx1 =[
    [3,4],
    [1,2]]
    
var mx2 =[
    [7,5],
    [6,4]]
        
    function kalimatrix( mA, mB ) {
	
        var jamban = new Array( mA.length );
        
        for ( var i = 0; i < jamban.length; i++ ) {
            
            jamban[ i ] = new Array( mB[ i ].length );
            for ( var j = 0; j < mA.length; j++ ) {
                
                jamban[ i ][ j ] = 0
                for ( var k = 0; k < mB.length; k++ ) {
                    
                    jamban[ i ][ j ] += mA[ i ][ k ] * mB[ k ][ j ];
                }
            }
        }
        
        return jamban;
    }
console.log(kalimatrix(mx1,mx2))