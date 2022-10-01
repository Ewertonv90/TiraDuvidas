const express = require('express');



class App {

    constructor(){

    }

    middlewares(){
        this.app.use(express.json());
        this.app.use('/files', express.static(path.resolve(__dirname , '..','tmp', 'uploads')));
        // CORS
        this.app.use((req, res, next)=>{
            
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
            res.header("Access-Control-Allow-Headers", 'X-PINGOTHER,Content-Type');
            this.app.use(cors());
            next();
        })
    }

    routes(){
        this.app.use(routes);
    }

}
