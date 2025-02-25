import  {promises as fs} from 'fs';

// var main = async () => {
//     var items = await fs.readdir('lojas');
//     console.log(items);
    
// }

 var main = async () => {
     var items = await fs.readdir('lojas', {withFileTypes:true});
     for (var item of items){
        var type = item.isDirectory() ? "pasta" : "arquivo";
        console.log(`${item.name} : ${type}`);
     }
    //  console.log(items);
   
 }


main();