// Write a program that creates string of an 8x8 grid
/*
# # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

function chessBoard(n) {
  var chess = '';
  
  for (let column = 0; column < n; column++) {
    for (let row = 0; row < n; row++) {
      if ((column + row) % 2 === 0) {
        chess += '#';
      } else {
        chess += ' '
      }
    }
    chess += '\n';
  }
  console.log(chess);
}
chessBoard(7);