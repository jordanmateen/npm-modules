var wallpaper = require('wallpaper');
var download = require('download-file');
var axios = require('axios');


var url = "https://dog.ceo/api/breeds/image/random";
var options = {
    directory: "./",
    filename: "dog.jpg"
}

axios.get(url).then(function(data){

    var img = data.data.message;
    
    download(img, options, function(err){
        
        if (err) throw err
    
        console.log("woof");
        wallpaper.set(options.filename);
        // (async () => {
        //     await wallpaper.set(options.filename);
        
        //     await wallpaper.get();
        //     //=> '/Users/sindresorhus/unicorn.jpg'
        // })();
    }) 



    
});



