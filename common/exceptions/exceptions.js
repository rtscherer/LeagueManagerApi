var exceptions = function() {
    
    var errorDetails = console.log("Error Details: " + error);
    
    //database connection exception
    var DatabaseConnectionException = function(err)
    {
        console.log("Unable to Establish Connection to Database.");
        errorDetails;
        return;
    }
    
    //file not found exception
    var FileNotFoundException = function FileNotFoundException(error)
    {
        console.log("Unable to Find File.");
        errorDetails;
        return;
    }
    
    //put exception
    var GetException = function GetException(source, error)
    {
        console.log("GET Exception occurred at " + source + "api.");
        errorDetails;
        return;
    }
    
    //put exception
    var PutException = function PutException(source, error)
    {
        console.log("PUT Exception occurred at " + source + "api.");
        errorDetails;
        return;
    }
    
    return { 
        DatabaseConnectionException: DatabaseConnectionException,
        FileNotFoundException: FileNotFoundException,
        GetException : GetException,
        PutException : PutException
    };
};
    
module.exports = exceptions;