function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 1 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

asincrona(function (err, result) {
    if (err) {
        console.error('Tenemos un error');
        console.log(err);
        return false;
    } else {
        console.log(result);
    }
});