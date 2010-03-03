
(JILified.Compliance.Bronze = function($){

    return {
        
        suiteName: "-- Bronze Compliance Test",

        setUp: function(){
            
        },
        
        tearDown: function(){
            
        },

        // ---------------------- Widget.Exception ---------------------- \\
        
        test_Exception_exists: function(){
            jsUnity.assertions.assertTrue(Widget.Exception);
        },

        test_Exception_has_expected_properties: function(){

            $.UnitTestHelpers.assertProperties(Widget.Exception, {
                message: "string",
                type: "string"
            });
            
        },

        test_Exception_can_be_thrown_properly: function(){
            // TODO: look into more, so does this mean you can have race conditions where this Static Exception object is used around the same time?
            var exception = Widget.Exception;
            exception.message = "message";
            exception.type = "testype";
            
            try{ throw exception; }
            catch (e){
                jsUnity.assertions.assertEqual(e.message, "message");
                jsUnity.assertions.assertEqual(e.type, "testype");
            }
            
        },

        // ---------------------- Widget.ExceptionTypes ---------------------- \\
        
        test_ExceptionTypes_exists: function(){
            jsUnity.assertions.assertTrue(Widget.ExceptionTypes);
        },

        test_ExceptionTypes_has_expected_properties: function (){
            $.UnitTestHelpers.assertProperties(Widget.ExceptionTypes, {
                INVALID_PARAMETER: "string",
                SECURITY: "string",
                UNKNOWN: "string",
                UNSUPPORTED: "string"
            });
        },

        // ---------------------- XMLHttpRequest ---------------------- \\

        test_XMLHttpRequest_exists: function(){
            jsUnity.assertions.assertTrue(XMLHttpRequest);
        }
        
    };

}(JILified));
