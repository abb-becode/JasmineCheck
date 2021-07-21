let selectElementsStartingWithA = (array) => {
    return array.filter((elt) => elt.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    const VOWEL_REGEX = new RegExp('^[aeiou].*', 'i');
    return array.filter((elt) => VOWEL_REGEX.test(elt));
}

let removeNullElements = (array) => {
    return array.filter((elt) => elt !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter((elt) => (elt !== null && elt !== false));
}

let reverseWordsInArray = (array) => {
    return array.map(elt =>  Array.from(elt).reverse().join(''));
    
}

let everyPossiblePair = (array) => {
    let pairs = (arr) => arr.map( (v, i) => arr.slice(i + 1).map(w => [v, w]) ).flat();
    array.unshift(array[array.length-1]);
    array.pop();
    return pairs(array);
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return string.slice(0,Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter(elt => elt == Array.from(elt).reverse().join('')).length;
}

let shortestWord = (array) => {
    return array.sort((a, b) => (a.length - 1) - (b.length - 1))[0];
}

let longestWord = (array) => {
    return array.sort((a, b) => (a.length - 1) - (b.length - 1))[array.length - 1];
}

let sumNumbers = (array) => {
    return array.reduce((sum,elt) => sum += elt);
}

let repeatElements = (array) => {
    return [...array,...array];
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((sum,elt) => sum += elt) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0,6);
}

let convertArrayToObject = (array) => {
    
    var str = "";
    for(let i=0;i<=array.length-1; i+=2) {
      let arr = array.slice(i,i+2);
      str = str + arr.join() + "|";
    }
    str = str.slice(0, -1);
    
    var obj = function() {
      var result = {};
      str.split(/\s*\|\s*/).forEach( (el) => { 
        var parts = el.split(/\s*,\s*/); result[parts[0]] = parts[1];
      });
      return result;
    }();  

    return obj;

}

let getAllLetters = (array) => {
    let source = array.join('');
    let target = source.split('');
    target.sort();
    let uniq = [...new Set(target)];
    return uniq;
}

let swapKeysAndValues = (object) => {
    return Object
        .entries(object)
        .reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {});
}

let sumKeysAndValues = (object) => {
    return Object
        .entries(object)
        .reduce((sum, [key, value]) => {
          return sum + parseInt(key)+parseInt(value);
        }, 0);
}

let removeCapitals = (string) => {
    return string.replace(/[^a-z\s]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return [date.getDate(), date.getMonth()+1, date.getFullYear()]
      .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}

let getDomainName = (string) => {
    return string.replace(/.*@/, '').replace(/.([^.]*)$/, '');
}

let titleize = (string) => {
    function _titleize(sentence) {
        if(!sentence.split) return sentence;
        var _titleizeWord = (string) => {
                return (string != "the" && string != "and") ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : string;
        },
        result = [];
        sentence.split(" ").forEach((w) => {
            result.push(_titleizeWord(w));
        });
        return result.join(" ");
    }
    let isDot = /[.]/.test(string) ? true : false;
    let result = "";
    if (!isDot) {
        let txt = _titleize(string);
        result += txt.charAt(0).toUpperCase() + txt.slice(1);
    } else {
        let arr = string.split(".");
        let _arr = [];
        for (sentence of arr) {
            let txt = _titleize(sentence.trim());
            let t = txt.charAt(0).toUpperCase() + txt.slice(1);
            _arr.push(t);
        }
        result += _arr.join(". ");
    }  
    return result;
}

let checkForSpecialCharacters = (string) => {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string) ? true : false;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return n = !(number > 1) ? 1 : factorial(number - 1) * number;
}

let findAnagrams = (string) => {
    if (string.length === 1) return string;
    var anagrams = [];
    for (var i=0; i<string.length; i++){
        var s = string[0];
        var _new =  findAnagrams(string.slice(1, string.length));
        for(var j=0; j<_new.length; j++) anagrams.push(s + _new[j]);
        string = string.substr(1, string.length -1) + s;
    }
    return anagrams;
}

let convertToCelsius = (number) => {
    return Math.round((parseFloat(number)-32)/1.8);
}

let letterPosition = (array) => {
    return array.map(a => parseInt(a, 36) - 9).filter(a => a >= 0);
}
