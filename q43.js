var show_magicians2 = function (list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var i = list_1[_i];
        console.log(i);
    }
    return list;
};
var make_great1 = function (list) {
    var newMagicians = [];
    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
        var magicians = list_2[_i];
        newMagicians.push(magicians + "The great");
        console.log(newMagicians);
    }
    return newMagicians;
};
var magiciansName2 = ["Zack King", "Aroura the mystic", "Nimbus The conjurer", "Azure the wizard"];
make_great1(magiciansName2);
show_magicians2(magiciansName2);
