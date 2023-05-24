/*
nodejs vs javascript

no Dom, no window object, server side apps, has access to filesystem.
    no ES6, use commonjs - every file is module. browser javascript depends on users browser type & version whereas our nodejs app only depends on our installed nodejs version
    modules on share what we export, they encapsulate code and we can install custom modules

we can log the entire 'module' object, this gives many properties like the modules
    -> filename. to export we simply use export property on module object
    module.exports = {item} .. or  module.exports = [item]
    ->we can export only a single item also
        module.exports = sayHi
    -> we remember what bob said about destructuring, using object, the names must match 100% while an array, lets us rename in that spot
    ->although I prefer to not destructure so we know what module it was pulled in from each time
    -> since we simply export an object, we can name this anything, it could be const m = require("./math")
        const math = require("./math");  -> our own module requires ./ file path, while foreign does not

    Module.exports is an object, so instead of settings exports to everything, we can set the properties directly
        module.exports.items = ["item1", "item2"]
       -> or make something, then set that property, remember above we don't need const because it's a property
           const person = { name: "bob"}
           module.exports.singlePerson = person;
        -> remember if we use export on single property then make exports = entire object {}, it will override all we wrote inline

        when we import a module, we invoke it, meaning, if we have a function that is ran inside a module
            and we simply require('./module') -> a function in that module will run, no matter if we use it or not

*/
/*
    Built in modules - long list of things built into node
            const os = require('os')
            const user = os.userInfo() -> get username, home directory,

            const path = require('path')
            -> we combine folders known, to get end path of file
                const filepath = path.join("/test", "test.js")
                /test/test.js
            -> get the file inside an entire path
                path.basename(filepath)  -> test.js

            __dirname is a global name, to get current project directory
            ->to get a complete file path, we resolve it, depending if it's in main directory folder or not
                path.resolve( "test",  'test.js')
            -> or in main folder
                path.resolve(__dirname, "test",  'test.js')


        * Synchronously read and write to files
        fs -> lets us read data inside files and write, not simply exporting its functions, objects etc.. like text
            or excel sheets data.
            -> readFileSync  get the file path using fs all in one
            const firstTxt = fs.readFileSync('./content/first.txt', 'utf8') -> gives us "hello first text file"

           writeFileSync - create file if it doesn't exist, and override the value if it does
            ->we get a txt file with text inside in 2nd parameter
                fs.writeFileSync('./content/thirdtext.txt', 'here is third file')
            -> if we only want to append, NOT overwrite any data, we use 3rd parameter, {flag: "a"}
            fs.writeFileSync('./content/thirdtext.txt', 'here is third file', {flag: "a"})

        *Asynchronously read and write to files
*/
const path = require('path')
const fs = require('fs')
const firstTxt = fs.readFileSync('./content/subfolder/sub.txt', 'utf8')

fs.writeFileSync('./content/thirdtext.txt', 'here is third file', {flag: "a"})





















