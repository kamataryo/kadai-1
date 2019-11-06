//3の倍数でメッセージをを表示する

const max = parseInt(process.argv[2])

for (let n = 1;n<= max;n = n + 1) {
    if (n % 3 === 0) {
        console.log('キュイン！')
    }　else {
        console.log(n)
    }
}