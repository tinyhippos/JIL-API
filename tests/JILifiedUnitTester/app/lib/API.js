(jsUnityRunner.API = function ($){

	function plural(cnt, unit) {
        return cnt + " " + unit + (cnt == 1 ? "" : "s");
    }

	return {

		run: function(){

			var results = new jsUnity.TestResults(),
				suiteNames = [],
				start = jsUnity.env.getDate(),
				i, j, cnt, test, suite,
				args_len = arguments.length;


			for (i = 0; i < args_len; i++) {
				
				try {
					suite = jsUnity.compile(arguments[i]);
				} catch (e) {
					this.error("Invalid test suite: " + e);
					return false;
				}

				cnt = suite.tests.length;

				$.Runner.startSuite(arguments[i], cnt, plural(cnt, "test"));

				suiteNames.push(suite.suiteName);
				results.total += cnt;

				$.Runner.updateAmountOfTests(cnt);

				// multi thread here?
				for (j = 0; j < cnt; j++) {

					setTimeout(function (x, y){
						return(function(){
							try {

								var test = suite.tests[y];
								
								suite.setUp && suite.setUp();
								test.fn.call(suite.scope);
								suite.tearDown && suite.tearDown();

								results.passed++;
								
								$.Runner.passTest(test);
							
							} catch (e) {

								suite.tearDown && suite.tearDown();

								$.Runner.failTest(test, e);
							}
							
						});
					}(i, j),0);
					
				}

				//if(x >= args_len){
								
					//results.suiteName = suiteNames.join(",");
					//results.failed = results.total - results.passed;
					//results.duration = jsUnity.env.getDate() - start;

					//$.Runner.updateResults(results);

				//}
				
			}

			//return results;
		}

	};

}(jsUnityRunner));