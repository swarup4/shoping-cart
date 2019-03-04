let config = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return { "DB_URI": "URL of Development Server", "PORT": 3001 };
        case 'production':
            return { "DB_URI": "URL of Production Server", "PORT": 3001 };
        default:
            return { "DB_URI": "URL of Default Server", "PORT": 3000 };
    }
}

module.exports = config;