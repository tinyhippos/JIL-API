
(JILified.Compliance.Silver = function($){

    return {
        suiteName: "-- Silver Compliance Test",

        setUp: function(){
            
        },
        
        tearDown: function(){
            
        },

        test_Widget_has_expected_methods: function (){
            
            $.UnitTestHelpers.assertMethods(Widget,
                {
                    onWakeup: "",
                    onMaximize: "",
                    onFocus: "",
                    onRestore: "",
                    openUrl: "",
                    setPreferenceForKey: "",
                    preferenceForKey: ""
                }
            );
            
        },

        test_Widget_setPreferenceForKey_saves_preference_value_as_String: function (){
            Widget.setPreferenceForKey("p value", "pstring");
            var item = Widget.preferenceForKey("pstring");
            jsUnity.assertions.assertEqual(item, "p value");
        },

        // TODO: what really happens here? believe all types come back as a string. (though should throw exception, move this to Base?)
        //test_Widget_setPreferenceForKey_saves_preference_value_as_Boolean: function (){
            //Widget.setPreferenceForKey(true, "pbool");
            //var item = Widget.preferenceForKey("pbool");
            //jsUnity.assertions.assertEqual(item, true);
        //},

        //test_Widget_setPreferenceForKey_saves_preference_value_as_Number: function (){
            //Widget.setPreferenceForKey(5, "pnumber");
            //var item = Widget.preferenceForKey("pnumber");
            //jsUnity.assertions.assertEqual(item, 5);
        //},
        
        test_Widget_setPreferenceForKey_returns_undefined_with_nonexistent_key: function (){
            
            jsUnity.assertions.assertUndefined(Widget.preferenceForKey("nonexistentkey"));
            
        },

        test_Widget_setPreferenceForKey_removes_key_when_passed_null: function (){
            
            var item = Widget.setPreferenceForKey("test", "removes_key");
            
            jsUnity.assertions.assertEqual(item, "test");
            
            Widget.setPreferenceForKey(null, "removes_key");
            
            item = Widget.preferenceForKey("removes_key");
            
            jsUnity.assertions.assertUndefined(Widget.preferenceForKey("removes_key"));
            
        }
        
    };

}(JILified));