var JILified = {
    Compliance: {}
};

// ----------------- Runner ----------------- \\
(JILified.Runner = function ($){

    return {

        run: function (complianceLevel){

            $.Logger.clear();

            switch (complianceLevel) {
                
                case "all":
                    jsUnity.run($.Compliance.Base, $.Compliance.Bronze, $.Compliance.Silver, $.Compliance.Gold);
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

        logError: function (e){
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


// ----------------- Test Helpers ----------------- \\
(JILified.UnitTestHelpers = function ($){

    return {

        assertMethods: function(obj, methods){
            
            methods = methods || {};

            jsUnity.assertions.assertTrue(obj);

            for (var method in methods){
                jsUnity.assertions.assertTypeOf("function", obj[method], "method was expected on object but not found: "+method);
            }

            for (var item in obj){
                if(obj.hasOwnProperty(item) && typeof obj[item] === 'function'){
                    jsUnity.assertions.assertNotUndefined("Public method found but not expected:"+item, methods[item])
                }
            }
            
        },

        // TODO, still needs to be a little more robust like assertMethods above (does not fail if property on "obj" but not on "properties")
        assertProperties: function (obj, properties){
            var property;
            for (property in properties){

                jsUnity.assertions.assertTrue(obj.hasOwnProperty(property), "property was undefined.");
                jsUnity.assertions.assertTypeOf(properties[property], obj[property]);

            }
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
