
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

            $.UnitTestHelpers.assertProperties(new Widget.Exception(), {
                message: "string",
                type: "string"
            });
            
        },

        test_Exception_can_be_thrown_properly: function(){
            
            var exception = new Widget.Exception();
            exception.message = "test exception message";
            exception.type = "testype";
            
            try{ throw exception; }
            catch (e){
                jsUnity.assertions.assertEqual(e.message, "test exception message");
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
