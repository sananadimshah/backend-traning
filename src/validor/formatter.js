const trim = function(){
    let name = "   Salman Khan     "
    name = name.trim()
    console.log(name)
}

const changeToUpperCase = function() {
    let upperCase = "AShaya KumaR"
    upperCase = upperCase.toUpperCase()
    console.log(upperCase)
}

const changetoLowerCase = function() {
    let lowerCase = " SHAhiD KaPooR"
    lowerCase= lowerCase.toLowerCase()
    console.log(lowerCase)
}

module.exports.trimtext = trim
module.exports.UpperCasetext = changeToUpperCase
module.exports.LowerCasetext = changetoLowerCase

