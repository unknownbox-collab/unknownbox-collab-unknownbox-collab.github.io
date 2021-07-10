var Key={
    BackSpace : false,
    Tab : false,
    Enter : false,
    Shift : false,
    Ctrl : false,
    Alt : false,
    Pause : false,
    Break : false,
    CapsLock : false,
    Esc : false,
    PageUp : false,
    PageDown : false,
    End : false,
    Home : false,
    Left : false,
    Up : false,
    Right : false,
    Down : false,
    Insert : false,
    Delete : false,
    0 : false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false,
    6 : false,
    7 : false,
    8 : false,
    9 : false,
    a : false,
    b : false,
    c : false,
    d : false,
    e : false,
    f : false,
    g : false,
    h : false,
    i : false,
    j : false,
    k : false,
    l : false,
    m : false,
    n : false,
    o : false,
    p : false,
    q : false,
    r : false,
    s : false,
    t : false,
    u : false,
    v : false,
    w : false,
    x : false,
    y : false,
    z : false,
    Windows : false,
    RightClick : false,
    F1 : false,
    F2 : false,
    F3 : false,
    F4 : false,
    F5 : false,
    F6 : false,
    F7 : false,
    F8 : false,
    F9 : false,
    F10 : false,
    F11 : false,
    F12 : false,
    NumLock : false,
    ScrollLock : false
};
var cursor={
    x : 0,
    y : 0,
    click:false
};
window.addEventListener('mousemove',function(e){
    cursor.x = e.x-constant.SCREEN.getBoundingClientRect().left;
    cursor.y = e.y-constant.SCREEN.getBoundingClientRect().top;
});
$(document).click(function (evt) {
    cursor.click = true;
})
$(document).keydown(function(e) {
    for (var i = 0; i < Object.keys(Key).length; i++) {
        if (e.keyCode == constant.KEYCODE[Object.keys(constant.KEYCODE)[i]]) {
            Key[Object.keys(constant.KEYCODE)[i]] = true;
        }
    }
}).keyup(function(e) {
    for (var i = 0; i < Object.keys(Key).length; i++) {
        if (e.keyCode == constant.KEYCODE[Object.keys(constant.KEYCODE)[i]]) {
            Key[Object.keys(constant.KEYCODE)[i]] = false;
        }
    }
});
function moveTo(x,y,delta,theta){
    return {x:x+Math.cos(Math.PI*theta/180)*delta,y:y+Math.cos(Math.PI*theta/180)*delta}
}
console.log("setting available");