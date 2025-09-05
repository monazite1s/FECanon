const moduleA = (function () {
    var name = "aaa"
    let age = 18
    let height = 1.88
    console.log(name);

    return {
        name,
        age,
        height
    }
})