let name = "bar"

exports.name = name

setTimeout(() => {
    name = "why"
    exports.name = name
}, 2000)