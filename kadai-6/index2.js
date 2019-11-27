const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": underfined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

try{
    console.log(JSON.parse(str1))
} catch (error) {
    console.log(error)
    //abcという文字列は正しいJSONではないから。
    //正しくは'abc'
}

try{
    console.log(JSON.parse(str2))
} catch (error) {
    console.log(error)
    //'abc'という文字列は正しいJSONではないから。
    //正しくは"abc"
}

try{
    console.log(JSON.parse(str3))
} catch (error) {
    console.log(error)
    //"abc"は正しいJSONなのでパースできる。
}

try{
    console.log(JSON.parse(str4))
} catch(error){
    console.log(error)
    //わかりません。
}

try{
    console.log(JSON.parse(str5))
} catch (error) {
    console.log(error)
    //"a"=123は正しいJSONなのでパースできる。
}

try{
    console.log(JSON.parse(str6))
} catch (error) {
    console.log(error)
    //わかりません。
}