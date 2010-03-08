var JILified = {
    Compliance: {}
};

// ----------------- Runner ----------------- \\
(JILified.Runner = function ($){

    return {

        run: function (complianceLevel, verbose){

            $.Logger.clear();

            $.Logger.verbose = verbose || false;

            switch (complianceLevel) {
                
                case "all":
                    jsUnity.run($.Compliance.Base, $.Compliance.Bronze, $.Compliance.Silver, $.Compliance.Gold);
                    break;
                case "experimental":
                    jsUnity.run($.Compliance.Experimental);
                    break;
                case "base":
                    jsUnity.run($.Compliance.Base);
                    break;
                case "bronze":
                    jsUnity.run($.Compliance.Bronze);
                    break;
                case "silver":
                    jsUnity.run($.Compliance.Bronze, $.Compliance.Silver);
                    break;
                case "gold":
                    jsUnity.run($.Compliance.Bronze, $.Compliance.Silver, $.Compliance.Gold);
                    break;
                default:
                    throw {name: "ComplianceLevelException", message: "Uknown compliance level, can not run Test Suite(s)." };
            }
            
        }
        
    };
    
}(JILified));


// ----------------- Error/Log handling ----------------- \\
(JILified.Logger = function ($){

    var LOGGER_DIV = "logger";

    return {

        verbose: false,

        logError: function (e){
            this.log('<span style="color: red;"><br/>'+e.stack+"<br/>");
        },

        log: function (e){
            document.getElementById(LOGGER_DIV).innerHTML += "<br />"+e;
        },
        
        note: function (e){
            if(this.verbose){
                document.getElementById(LOGGER_DIV).innerHTML += "<br /><span style=\"color: #FF4848\">"+e+"<span>";
            }
        },

        clear: function (){
            document.getElementById(LOGGER_DIV).innerHTML = "";
        }
        
    };
    
}(JILified));


// ----------------- jsUnity config and execution ----------------- \\

jsUnity.error = function (eStr){
    JILified.Logger.logError(eStr);
}


jsUnity.log = function (eStr){
    JILified.Logger.log(eStr);
}
