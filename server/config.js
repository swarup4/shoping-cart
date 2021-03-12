let config = function(){
    debugger;
    switch(process.env.NODE_ENV){
        case 'dev':
            return { "DB_URI": "URL of Development Server", "PORT": 3001 };
        case 'prod':
            return { "DB_URI": "URL of Production Server", "PORT": 3000 };
        default:
            return { "DB_URI": "URL of Default Server", "PORT": 3002 };
    }
}

module.exports = config;