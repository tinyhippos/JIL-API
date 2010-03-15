
// ---------- Any tests that apply to all (or JIL missed) ---------- \\
(jsUnityRunner.Tests.Base = function($){

    return {
        
        suiteName: "-- Base Test",

        setUp: function(){
            
        },
        
        tearDown: function(){
            
        },

        // ---------------------- Widget base test cases ---------------------- \\

        test_Widget_object_exists: function(){
            jsUnity.assertions.assertNotNull(Widget);
        },

        // ---------------------- Widget base test cases ---------------------- //

        // ---------------------- WidgetManager base test cases ---------------------- \\

        test_WidgetManager_object_exists: function(){
            jsUnity.assertions.assertNotNull(WidgetManager);
        },

        test_WidgetManager_has_expected_methods: function(){
            $.UnitTestHelpers.assertMethods(WidgetManager,
                {
                    checkWidgetInstallationStatus: ""
                }
            );
        }

        // ---------------------- WidgetManager base test cases ---------------------- //
    };

}(jsUnityRunner));
