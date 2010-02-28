
(JILified.Compliance.Silver = {

    suiteName: "-- Silver Compliance Test",

    setUp: function(){
        
    },
    
    tearDown: function(){
        
    },

    test_Widget_setPreferenceForKey_is_function: function (){
         jsUnity.assertions.assertTypeOf("function", Widget.setPreferenceForKey);
    },

    test_Widget_preferenceForKey_is_function: function (){
        jsUnity.assertions.assertTypeOf("function", Widget.preferenceForKey);
    },
    
    
});