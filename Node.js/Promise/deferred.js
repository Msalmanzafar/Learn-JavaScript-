var d1 = Promise.defer();
var d2 = Promise.defer();
var d3 = Promise.defer();

var p1 = d1.Promise;
var p2 = d2.Promise;
var p3 = d3.Promise;

Promise.all([p1,p2,p3]).then((values) => {
    console.log(values.reduce((memo,i) => {
        return memo + i;
    }));
});
d1.resolve(12);
d2.resolve(12);
d3.resolve(12);