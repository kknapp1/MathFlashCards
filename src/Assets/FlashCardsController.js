//var FlashCardsApp = angular.module('FlashCardsApp', []);

var FLASHCARDSAPP = {
    BuildProblemArray: function() {
        var retval = new Array();
        if (bSumsOfTen)
            $.merge(retval, aSumsOf10);
        if (bSumsOf10Subtract)
            $.merge(retval, aSumsOf10Subtract);            
        if (bMultiply1)
            $.merge(retval, aMultiply1);  
        if (bMultiply2)
            $.merge(retval, aMultiply2);  
        if (bMultiply3)
            $.merge(retval, aMultiply3);  
        if (bMultiply4)
            $.merge(retval, aMultiply4);  
        if (bMultiply5)
            $.merge(retval, aMultiply5);  
        if (bMultiply6)
            $.merge(retval, aMultiply6);  
        if (bMultiply7)
            $.merge(retval, aMultiply7);  
        if (bMultiply8)
            $.merge(retval, aMultiply8);  
        if (bMultiply9)
            $.merge(retval, aMultiply9);  
        if (bMultiply10)
            $.merge(retval, aMultiply10);  
        if (bMultiply11)
            $.merge(retval, aMultiply11);
        if (bMultiply12)
            $.merge(retval, aMultiply12);
        if (bDoubles)
            $.merge(retval, aDoubles);
        if (bTest6)
            $.merge(retval, aTest6);
        if (bTest9)
            $.merge(retval, aTest9);
        if (bTest10)
            $.merge(retval, aTest10);


        /* $.each(aProblemSets, function (index, item) {
            $.merge(retval, item.data);
        }); */

        return retval
    },

    iListCounter: function(){
        return this.iListCounter;
    },

    GetNextSet: function (aProblemSets, bShuffle) {
        iCorrectAnswers++;
        var n = aProblemSets.length;
        var addend1;
        if (bShuffle) {
            this.iCurrentIndex = Math.floor(Math.random() * n--);
        }
        else {
            this.iCurrentIndex = iListCounter++;
            if (iListCounter >= aProblemSets.length)
                iListCounter = 0;
        }

        return [aProblemSets[this.iCurrentIndex][0], aProblemSets[this.iCurrentIndex][1]];
    }
}