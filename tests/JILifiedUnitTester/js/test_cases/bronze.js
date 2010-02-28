
(JILified.Compliance.Bronze = {

    suiteName: "-- Bronze Compliance Test",

    setUp: function(){
        
    },
    
    tearDown: function(){
        
    },

    test_Widget_object_exists: function(){
        jsUnity.assertions.assertNotNull(Widget);
    },

    test_Widget_Exception_exists: function(){
        jsUnity.assertions.assertNotNull(Widget.Exception);
    },

    test_Widget_ExceptionTypes_exists: function(){
        jsUnity.assertions.assertNotNull(Widget.ExceptionTypes);
    },

    test_XMLHttpRequest_exists: function(){
        jsUnity.assertions.assertNotNull(XMLHttpRequest);
    }

});
