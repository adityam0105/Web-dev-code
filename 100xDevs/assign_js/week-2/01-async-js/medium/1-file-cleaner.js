// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs= require("fs")
 const cleanFile = async (filePath) =>{
    try{
        const fileContent = fs.readFileSync(filePath,"utf-8");
        const cleanedContent = fileContent.replace(/\s+/g," ");
        fs.writeFileSync("cleanedFile.txt", cleanedContent, (err)=>{
            if(err) console.log("Something went wrong during writing...");
        })
    }
    catch(error){
        console.log("Something went wrong");
    }
};
cleanFile("a.txt")