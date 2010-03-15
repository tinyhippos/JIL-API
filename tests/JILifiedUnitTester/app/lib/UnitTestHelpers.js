// ----------------- Test Helpers ----------------- \\
(jsUnityRunner.UnitTestHelpers = function ($){

    //takes an array of arguments and returns a subset
    // was going to use something like Array.slice but arguments is weird half Array with no .slice method
    function _tackOnArguments(args, from, to){
        var newArgs = [], i;

        for (i = from; i < to; i+=1){
            newArgs.push(args[i]);
        }

        return newArgs;
    }

    /*
     * expects to return true if caught any execption or false if not (also has a callback for judging the exception manually)
     * Arguments ==> (function, namespace, *args)
     */
    function _catchesException(args, callback){
        
        if(args.length < 1 || typeof args[0] !== "function"){
            throw {name: "Argument", message: "_catchesException ==> Need at one argument that is a (function, namespace, *args)." };
        }

        var caughtException = false;
        var func = args[0], namespace = args[1];
        var funcArgs = _tackOnArguments(args, 2, args.length);
        
        try{ func.apply(namespace, funcArgs); }
        catch (e){
            $.Logger.warn("handled exception --> "+(e.name || e.type)+" :: "+e.message);
            if(e.stack){ $.Logger.note("Stack --> "+e.stack); }
            
            if(typeof callback === 'function'){
                caughtException = callback(e);
            }
            else{
                caughtException = true;
            }
        }
        return caughtException;
    }
    
    //Public API
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

        // TODO, still needs to be a little more robust like assertMethods
        assertProperties: function (obj, properties){
            var property;
            for (property in properties){
                if(obj.hasOwnProperty(property)){
                    jsUnity.assertions.assertTypeOf(properties[property], obj[property]);
                }
            }
        },

        catchesException: function(){
            return _catchesException(arguments);
        },

        // note: uses Widget.Exception class's type property
        catchesSpecificException: function(){
            var eType = arguments[0];
            arguments = _tackOnArguments(arguments, 1, arguments.length);

            return _catchesException(arguments, function (e){
                    return e.type === eType;
                });
        }
        
    };
    
}(jsUnityRunner));