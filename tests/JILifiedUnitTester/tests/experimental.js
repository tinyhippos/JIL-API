
/*
 * Tests that are more strict or experimental
 */
(jsUnityRunner.Tests.Experimental = function($){

    return {
        
        suiteName: "-- Experimental Test",

        setUp: function(){
            
        },
        
        tearDown: function(){
            
        },

        //test_Widget_addEventListener_is_available_and_works: function(){
            
            //try{
                //Widget.addEventListener("resolution", function (){
                    //alert("test");
                //});
            //}
            //catch (e){
                //jsUnity.assertions.fail("caught Exception = "+(e.type || e.name)+" <br />"+e.message+" <br />"+e.stack);
            //}
            
        //},

        //test_widget_object_exists: function (){
            //jsUnity.assertions.assertNotNull(widget);
        //},
        
        //test_widget_addEventListener_is_available_and_works: function(){
            
            //try{
                //widget.addEventListener("resolution", function (){
                    //alert("test");
                //});
            //}
            //catch (e){
                //jsUnity.assertions.fail("caught Exception = "+(e.type || e.name)+" <br />"+e.message+" <br />"+e.stack);
            //}
            
        //},

        //test_widget_setPreferenceForKey_saves_preference_value_string: function (){
            
            //widget.setPreferenceForKey("p value", "pstring");
            //var item = widget.preferenceForKey("pstring");
            //jsUnity.assertions.assertEqual(item, "p value");

            //// TODO, find way to make sure preferences are cleared every test run.
            //widget.setPreferenceForKey(null, "pstring");
            
        //},

        //test_widget_setPreferenceForKey_adds_and_removes_key_properly: function (){
            
            //widget.setPreferenceForKey("test", "removes_key");

            //var item = widget.preferenceForKey("removes_key");
            
            //jsUnity.assertions.assertEqual(item, "test");

            //widget.setPreferenceForKey(null, "removes_key");
            
            //item = widget.preferenceForKey("removes_key");
            
            //jsUnity.assertions.assertUndefined(widget.preferenceForKey("removes_key"));
            
        //},
        
        //test_widget_setPreferenceForKey_returns_undefined_with_nonexistent_key: function (){
            
            //jsUnity.assertions.assertUndefined(widget.preferenceForKey("nonexistentkey"));
            
        //},

        //test_widget_setPreferenceForKey_is_function: function (){
            //jsUnity.assertions.assertInstanceOf("function", widget.setPreferenceForKey);
        //},
        
        //test_widget_preferenceForKey_is_function: function (){
            //jsUnity.assertions.assertInstanceOf("function", widget.preferenceForKey);
        //},

        //test_window_object_exists: function (){
            //jsUnity.assertions.assertNotNull(window);
        //},
        
        //test_window_resize_is_an_function: function(){
            //jsUnity.assertions.assertNotNull(window.resizeTo);
            //jsUnity.assertions.assertNotUndefined(window.resizeTo);
        //}

    };

}(jsUnityRunner));
