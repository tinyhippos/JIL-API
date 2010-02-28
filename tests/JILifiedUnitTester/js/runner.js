var JILified = {};

JILified.Compliance = {};

// ----------------- Runner ----------------- \\
(JILified.Runner = function ($){

    return {

        run: function (complianceLevel){

            $.Logger.clear();

            switch (complianceLevel) {
                
                case "all":
                    jsUnity.run($.Compliance.Bronze, $.Compliance.Silver, $.Compliance.Gold);
                    break;
                case "bronze":
                    jsUnity.run($.Compliance.Bronze);
                    break;
                case "silver":
                    jsUnity.run($.Compliance.Silver);
                    break;
                case "gold":
                    jsUnity.run($.Compliance.Gold);
                    break;
                default:
                    throw {name: "ComplianceLevelException", message: "Uknown compliance level, can not run Test Suite(s)." };
                    return(false);
            }

        },

        assertObject: function(obj, message){
            if(!obj){ fail(message); }
        }
        
    };
    
}(JILified));

// ----------------- Error/Log handling ----------------- \\
(JILified.Logger = function ($){

    var LOGGER_DIV = "logger";

    return {

        handleError: function (e){
            this.log('<span style="color: red;"><br/>'+e.stack+"<br/>");
        },

        log: function (e){
            document.getElementById(LOGGER_DIV).innerHTML += "<br />"+e;
        },

        clear: function (){
            document.getElementById(LOGGER_DIV).innerHTML = "";
        }
        
    };
    
}(JILified));



// ----------------- jsUnity config and execution ----------------- \\

jsUnity.error = function (eStr){
    JILified.Logger.handleError(eStr);
}


jsUnity.log = function (eStr){
    JILified.Logger.log(eStr);
}
