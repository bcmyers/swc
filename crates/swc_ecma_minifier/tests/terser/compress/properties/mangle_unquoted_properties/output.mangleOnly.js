var a = {};
a.top = 1;
function b() {
    a["foo"] = "bar";
    a.color = "red";
    a.stuff = 2;
    x = {
        bar: 10,
        size: 7
    };
    a.size = 9;
}
function c() {
    a.foo = "bar";
    a["color"] = "red";
    x = {
        bar: 10,
        size: 7
    };
    a.size = 9;
    a.stuff = 3;
}
