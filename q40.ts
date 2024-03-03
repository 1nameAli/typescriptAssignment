interface Album{
    artistName:string,
    albumTitle:string,
    numberOfTracks?:number

}


let make_album=(artistName:string,albumTitle:string,numberOfTracks?:number):Album=>{
    let album:Album={

    artistName,
    albumTitle,
    
    }
    if(numberOfTracks!==undefined){
        album.numberOfTracks=numberOfTracks
    }
    return album
}



let album1=make_album("Artist 1","Album 1");
let album2=make_album("Artist 2","Album 2");
let album3=make_album("Artist 3","Album 3",3);
console.log(album1);
console.log(album2);
console.log(album3);


