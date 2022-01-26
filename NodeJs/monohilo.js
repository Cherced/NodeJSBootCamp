console.log("Monohilo");
let i = 0;
setInterval(() => {
    console.log(i);
    i++;
    if (i === 5) {
        i = 0;
    }
}, 10);