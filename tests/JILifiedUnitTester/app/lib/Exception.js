(jsUnityRunner.Exception = function ($){

	return {

        types: {
            ArgumentLength: "ArgumentLength",
            ArgumentType: "ArgumentType",
            Argument: "Argument", 
            DomObjectNotFound: "DomObjectNotFound",
            MethodNotImplemented: "MethodNotImplemented",
            InvalidState: "InvalidState",
            TestSuite: "TestSuiteException"
        },

		handle: function(exception, reThrow){
			
			$.Utils.validateNumberOfArguments(1, 2, arguments.length);

			reThrow = reThrow || false;

			$.Utils.validateMultipleArgumentTypes(arguments, ['object', 'boolean']);
			
			var eMsg = exception.message || "exception caught!",
				msg = eMsg+"\n\n"+(exception.stack || "*no stack provided*")+"\n\n",
				smallMsg;

			console.error(exception.name);
            console.error(exception.message);
            console.error(exception.stack);

			if (reThrow){
				throw exception;
			}

		},

		raise: function(exceptionType, message){
			
			$.Utils.validateNumberOfArguments(1, 2, arguments.length);

			message = message || "";

			$.Utils.validateMultipleArgumentTypes(arguments, ['string', 'string']);

			throw {name: exceptionType, message: message};
			
		}

	};

}(jsUnityRunner));