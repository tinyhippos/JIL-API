
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

            // TODO, find way to make sure preferences are cleared every test run.
            Widget.setPreferenceForKey(null, "pstring");
        },

        test_Widget_setPreferenceForKey_adds_and_removes_key_properly: function (){
            
            Widget.setPreferenceForKey("test", "removes_key");

            var item = Widget.preferenceForKey("removes_key");
            
            jsUnity.assertions.assertEqual(item, "test");

            Widget.setPreferenceForKey(null, "removes_key");
            
            item = Widget.preferenceForKey("removes_key");
            
            jsUnity.assertions.assertUndefined(Widget.preferenceForKey("removes_key"));
            
        },
        
        test_Widget_setPreferenceForKey_returns_undefined_with_nonexistent_key: function (){
            
            jsUnity.assertions.assertUndefined(Widget.preferenceForKey("nonexistentkey"));
            
        }
        
    };

}(JILified));