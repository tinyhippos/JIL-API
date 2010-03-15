
(jsUnityRunner.Tests.Silver = function($){

    return {
        suiteName: "-- Silver Compliance Test",

        setUp: function(){
            
        },
        
        tearDown: function(){
            
        },

        // ------------------------------------------------ Widget ------------------------------------------------ \\

        //test_Widget_has_expected_methods: function (){
            
            //$.UnitTestHelpers.assertMethods(Widget,
                //{
                    //openUrl: "",
                    //setPreferenceForKey: "",
                    //preferenceForKey: ""
                //}
            //);
            
        //},
        
        // ------------------------------------------------ Widget.setPreferenceForKey ------------------------------------------------ \\

        test_Widget_setPreferenceForKey_throws_INVALID_PARAMETER_exception_when_invalid_argument_types: function (){

            if(!$.UnitTestHelpers.catchesSpecificException(Widget.ExceptionTypes.INVALID_PARAMETER, Widget.setPreferenceForKey, Widget, new Date(), 5)){
                jsUnity.assertions.fail("INVALID_PARAMETER exception was expected but one was not thrown or another was encountered.");
            }
            
        },

        test_Widget_setPreferenceForKey_throws_INVALID_PARAMETER_exception_when_invalid_argument_lengths: function (){

			var msg = "INVALID_PARAMETER exception was expected but one was not thrown or another was encountered.";

            if(!$.UnitTestHelpers.catchesSpecificException(Widget.ExceptionTypes.INVALID_PARAMETER, Widget.setPreferenceForKey, Widget, {}, false, "")){
                jsUnity.assertions.fail(msg);
            }

            if(!$.UnitTestHelpers.catchesSpecificException(Widget.ExceptionTypes.INVALID_PARAMETER, Widget.setPreferenceForKey, Widget)){
                jsUnity.assertions.fail(msg);
            }
            
        },

        test_Widget_setPreferenceForKey_saves_preference_value_string: function (){
            
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
            
        },

        // ------------------------------------------------ Widget.preferenceForKey ------------------------------------------------ \\

        test_Widget_preferenceForKey_throws_INVALID_PARAMETER_exception_when_invalid_argument_types: function (){

            if(!$.UnitTestHelpers.catchesSpecificException(Widget.ExceptionTypes.INVALID_PARAMETER, Widget.preferenceForKey, Widget, 5)){
                jsUnity.assertions.fail("INVALID_PARAMETER exception was expected but one was not thrown or another was encountered.");
            }
            
        },

        test_Widget_preferenceForKey_throws_INVALID_PARAMETER_exception_when_invalid_argument_lengths: function (){

			var msg = "INVALID_PARAMETER exception was expected but one was not thrown or another was encountered.";

            if(!$.UnitTestHelpers.catchesSpecificException(Widget.ExceptionTypes.INVALID_PARAMETER, Widget.preferenceForKey, Widget, false, new Date())){
                jsUnity.assertions.fail(msg);
            }

            if(!$.UnitTestHelpers.catchesSpecificException(Widget.ExceptionTypes.INVALID_PARAMETER, Widget.preferenceForKey, Widget)){
                jsUnity.assertions.fail(msg);
            }
            
        },

        // ------------------------------------------------ Widget.Device.getAvailableApplications ------------------------------------------------ \\

        test_Widget_Device_getAvailableApplications_returns_an_array: function (){
            try{
                var arr = Widget.Device.getAvailableApplications();
                jsUnity.assertions.assertInstanceOf(Array, arr);
            }
            catch (e){
                
                //var msg;
                //if(e instanceof Widget.Exception){
                    //msg = "Widget.Exception ::  ";
                //}else{
                    //msg = "Exception was thrown but not expected! name ::";
                //}

                jsUnity.assertions.fail(e.type+" message: "+e.message);
                
            }
        },

        // ------------------------------------------------ Widget.Device.getFileSystemRoots ------------------------------------------------ \\

        test_Widget_Device_getFileSystemRoots_returns_an_array: function (){
            try{
                var arr = Widget.Device.getFileSystemRoots();
                jsUnity.assertions.assertInstanceOf(Array, arr);
            }
            catch (e){
                
                //var msg;
                //if(e instanceof Widget.Exception){
                    //msg = "Widget.Exception ::  ";
                //}else{
                    //msg = "Exception was thrown but not expected! name ::";
                //}

                jsUnity.assertions.fail(e.type+" message: "+e.message);
                
            }
        }
        
    };

}(jsUnityRunner));

