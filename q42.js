var show_magicians1 = function (list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var i = list_1[_i];
        console.log(i);
    }
    return list;
};
var make_great = function (list) {
    for (var i in list) {
        list[i] = list[i] + " The great";
    }
};
var magiciansName1 = ["Zack King", "Aroura the mystic", "Nimbus The conjurer", "Azure the wizard"];
make_great(magiciansName1);
show_magicians1(magiciansName1);
