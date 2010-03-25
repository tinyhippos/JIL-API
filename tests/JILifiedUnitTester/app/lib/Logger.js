// ----------------- Error/Log handling ----------------- \\
(jsUnityRunner.Logger = function ($){
	
    return {

        verbose: false,

        warn: function (msg){
			if(this.verbose){
				var d = document.getElementById($.Constants.INFO_LOGGER_DIV);
				d.innerHTML += msg + "<br />";
				d.scrollTop = d.scrollHeight;
			}
        },

        log: function (msg, colour){
			var d = document.getElementById($.Constants.LOGGER_DIV);
			colour = colour || "#000000";
			d.innerHTML += '<span style="color:' + colour + ';">' + msg + "</span><br />";
			d.scrollTop = d.scrollHeight;
        },

		error: function (msg){
			this.log(msg, "red");
			if(console){ console.error(msg); }
		},

        clear: function (){
            document.getElementById($.Constants.LOGGER_DIV).innerHTML = "";
            document.getElementById($.Constants.INFO_LOGGER_DIV).innerHTML = "";
        }
		
    };
    
}(jsUnityRunner));