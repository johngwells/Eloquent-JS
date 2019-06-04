// Loop that makes 7 calls to console.log
/*
#
##
###
####
#####
######
#######
*/

function triangle(n) {
  let tri = '';

  for (let i = 0; i < n; i++) {
    tri += '#';
    console.log(tri);
  }
}

triangle(7);
