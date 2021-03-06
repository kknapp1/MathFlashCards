
var aSumsOf10 = new Array();
for (var i = 1; i <= 9; i++) {
    aSumsOf10.push([i, 10 - i]);
}

var aDoubles = new Array();
for (var i = 1; i <= 9; i++) {
    aDoubles.push([i, i]);
}

var aSumsOf10Subtract = new Array();
for (var i = 1; i<=9; i++) {
    aSumsOf10Subtract.push([10, -1*i]);
} 

var aMultiply1 = buildMultiplyList(1);
var aMultiply2 = buildMultiplyList(2);
var aMultiply3 = buildMultiplyList(3);
var aMultiply4 = buildMultiplyList(4);
var aMultiply5 = buildMultiplyList(5);
var aMultiply6 = buildMultiplyList(6)
var aMultiply7 = buildMultiplyList(7)
var aMultiply8 = buildMultiplyList(8)
var aMultiply9 = buildMultiplyList(9)
var aMultiply10 = buildMultiplyList(10);
var aMultiply11 = buildMultiplyList(11);
var aMultiply12 = buildMultiplyList(12);

var aTest6 = [[4,1],[9,9],[9,1],[2,4],[2,7],[4,4],[2,5],[2,4],[4,3],[7,7],[4,0],[4,4],[0,0],[2,1],[1,7],[2,2],[5,3],[2,3],[0,2],[4,6],[3,3],[3,5],[8,8],[0,1],[4,2],[2,5],[1,5],[4,5],[5,1],[4,5],[0,8],[6,4],[3,0],[0,5],[4,5],[2,4],[6,1],[7,7],[1,9],[1,1],[6,6],[4,3],[5,3],[8,8],[5,1],[1,4],[7,3],[0,2],[6,2],[3,7],[1,1],[8,2],[1,2],[4,6],[3,6],[2,4],[8,0],[2,5],[1,6],[8,8],[4,1],[0,7],[5,0],[5,5],[4,2],[3,7],[1,2],[2,2],[2,3],[7,7],[0,9],[9,9],[6,3],[6,2],[6,6],[3,0],[2,3],[8,1],[3,6],[4,3],[6,1],[2,3],[7,0],[4,4],[2,8],[0,8],[3,2],[9,0],[3,0],[3,3],[9,1],[6,6],[3,5],[2,6],[9,9],[3,1],[0,3],[6,2],[2,7],[5,5]];
var aTest9 = [[9,-6],[10,-2],[5,-3],[6,-5],[7,-2],[5,-1],[9,-8],[7,-4],[4,-2],[8,-0],[3,-3],[7,-6],[6,-4],[8,-3],[4,-2],[9,-3],[8,-1],[6,-3],[1,-1],[10,-8],[9,-0],[8,-4],[6,-0],[4,-3],[10,-4],[9,-8],[3,-1],[8,-6],[8,-1],[9,-5],[3,-0],[6,-1],[7,-4],[3,-2],[5,-3],[8,-7],[7,-2],[1,-0],[9,-4],[7,-5],[10,-5],[9,-3],[6,-4],[7,-1],[9,-6],[6,-3],[4,-1],[8,-3],[5,-4],[7,-1]];
var aTest10 = [[6,-4],[9,-3],[10,-4],[8,-5],[3,-2],[7,-4],[6,-3],[8,-4],[4,-3],[5,-4],[10,-7],[8,-0],[9,-8],[5,-3],[6,-2],[7,-3],[10,-7],[7,-0],[10,-1],[1,-0],[4,-2],[7,-1],[8,-7],[10,-3],[9,-1],[10,-9],[4,-0],[10,-2],[9,-5],[4,-3],[10,-5],[9,-3],[5,-5],[8,-3],[2,-0],[5,-1],[7,-6],[8,-7],[9,-6],[3,-1],[4,-2],[8,-6],[10,-1],[6,-1],[10,-1],[1,-1],[5,-3],[9,-2],[10,-6],[8,-2],[6,-5],[3,-3],[10,-1],[5,-4],[7,-3],[9,-7],[8,-2],[6,-5],[9,-0],[2,-2],[9,-6],[10,-9],[5,-2],[7,-5],[8,-3],[9,-5],[10,-4],[3,-0],[8,-8],[7,-6],[7,-2],[8,-6],[0,-0],[9,-9],[10,-2],[6,-3],[7,-4],[10,-6],[5,-2],[4,-4],[6,-0],[8,-2],[9,-4],[4,-1],[9,-8],[5,-0],[7,-7],[6,-2],[8,-5],[7,-2],[7,-5],[8,-1],[6,-4],[2,-1],[10,-3],[8,-4],[6,-6],[10,-5],[9,-7],[8,-4]];


function buildMultiplyList(multiplier){
    retval = new Array();
    for (var i = 0; i<=12; i++) {
        retval.push([multiplier, i]);
        //retval.push([multiplier, 'x' + i]);
    } 
    // top-bottom
    for (var i = 0; i<=12; i++) {
        retval.push([i, multiplier]);
        //retval.push([i, 'x' + multiplier]);
    }     
    return retval;
}



//FlashCardsApp.controller('ProblemSetCtrl', function ($scope) {
//    $scope.ProblemSets = [
//                  {
//                      "shortname": "test6",
//                      "displayname": "Timed Test 6",
//                      "selected": "true",
//                      "data": [[1, 1], [1, 2], [1, 3]]
//                  },
//                  {
//                      "shortname": "test7",
//                      "displayname": "Timed Test 7.2",
//                      "selected": "true",
//                      "data": [[20, 1], [2, 2], [2, 3]]
//                  }
//    ];
//});

var aProblemSets = [
              {
                  "shortname": "test6",
                  "displayname": "Timed Test 6",
                  "selected": "true",
                  "data": [[100, 1], [1, 2], [1, 3]]
              },
              {
                  "shortname": "test7",
                  "displayname": "Timed Test 7.1",
                  "selected": "true",
                  "data": [[2, 1], [2, 2], [2, 3]]
              }
];
