

function BuildProblemArray() {
    var retval = new Array();
    if (bSumsOfTen)
        retval = retval.concat(aSumsOf10);
    if (bDoubles)
        retval = retval.concat(aDoubles);
    if (bTest6)
        retval = retval.concat(aTest6);
    return retval
}

function GetNextSet(aProblemSets, bShuffle) {
    iCorrectAnswers++;
    var n = aProblemSets.length;
    var addend1;
    if (bShuffle) {
        iElement = Math.floor(Math.random() * n--);
    }
    else {
        iElement = iListCounter++;
        if (iListCounter >= aProblemSets.length)
            iListCounter = 0;
    }

    return [aProblemSets[iElement][0], aProblemSets[iElement][1]];
}

