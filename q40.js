var make_album = function (artistName, albumTitle, numberOfTracks) {
    var album = {
        artistName: artistName,
        albumTitle: albumTitle,
    };
    if (numberOfTracks !== undefined) {
        album.numberOfTracks = numberOfTracks;
    }
    return album;
};
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2");
var album3 = make_album("Artist 3", "Album 3", 3);
console.log(album1);
console.log(album2);
console.log(album3);
