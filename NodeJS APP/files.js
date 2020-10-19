const fs = require('fs'); // NordJS File System Module

// Reading Files

//First Argument - File Location | Second Argument - Callback Function
//Second Argument will execute after data is retrieved from the location. It's Asynchronous.

fs.readFile('./docs/blog.txt', (err, data) => { 
    err ? (console.log(err)) : (console.log(data.toString()));                             
});



// Writing Files

//First Argument - File Location | Second Argument - Data to be written | Third Argument - Callback Function
//Third Argument will execute after data is written to the file. It's Asynchronous.
// If the file doesn't exist, then it'll create a new file.

fs.writeFile('./docs/blog.txt', 'Written by writeFile() method',() => {
    console.log('File was written');
});



// Creating Directories

//First Argument - Location & File Name | Second Argument - Callback Function
//Second Argument will execute after the folder is created. It's Asynchronous.

fs.mkdir('./assets', (err) => {
    err ? (console.log(err)) : (console.log('folder created'));
});
 


// Deleting Directories

//First Argument - Location & File Name | Second Argument - Callback Function
//Second Argument will execute after the folder is deleted. It's Asynchronous.

fs.rmdir('./assets', (err) => {
    err ? (console.log(err)) : (console.log('folder deleted'));
});



// Check If A Folder Exists

// If the assets folder doesn't exist, then create the folder.
// Else delete the assets folder.

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        err ? (console.log(err)) : (console.log('folder created'));
    });
} else {
    fs.rmdir('./assets', (err) => {
        err ? (console.log(err)) : (console.log('folder deleted'));
    });
}



// Deleting Files

//First Argument - Location & File Name | Second Argument - Callback Function
//Second Argument will execute after the file is deleted. It's Asynchronous.

 if (fs.existsSync('./docs/deleteme.txt')) {
     fs.unlink('./docs/deleteme.txt', (err) => {
        err ? (console.log(err)) : (console.log('file deleted'));
     });
 }


