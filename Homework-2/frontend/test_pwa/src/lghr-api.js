// created by Renato
var MyPlugin = {}

const apiURL = "http://ip.jsontest.com/"



const getJSON = function(vueObject, endpoint, paramsObject, onSuccess, onFail, method, pluginOptions) {

	var url = apiURL + endpoint

url = apiURL

	const onResultSuccess = function(response){
		console.log("on callback success")
		console.log(response)
		var body = response.body
		//console.log("ip=" + body.params.ip)		
		if (onSuccess) {
			onSuccess(body)
		}
	}
	const onResultFail = function(response){
		console.log("on callback FAILED")
		console.log(response)
		var body = response.body

		
		if (body.errorCode == 1) {  // errorCode == 1 is Invalid Token
			vueObject.$route.push("/Logout")
			return
		}

		if (onFail) {
			onFail(body)
		}
	}

	var headers = {"Content-Type":  "application/json"}

	var options = {}
	options.headers = headers

	if (method && method.toLowerCase() == "get") {
		options.params = paramsObject
		vueObject.$http.get(url, options).then(onResultSuccess, onResultFail);		
	} else {
		vueObject.$http.post(url, paramsObject , options).then(onResultSuccess, onResultFail);		
	}
	
}





MyPlugin.install = function (Vue, options) {
  // 1. add global method or property
  Vue.prototype.lghrAPIRequest = function (vueObject, cmd, paramsObject, method, onSuccess, onFail) {
    // something logic ...
    console.log("hi grom lghr api")

    //console.table(options)
    //console.table(vueObject)

    if (paramsObject==undefined){ paramsObject = {} }

    const params = { 'cmd': cmd, 'params':paramsObject, 'method':method, 'token':vueObject.$session.get('token') } 

    
    getJSON(vueObject, cmd, params, onSuccess, onFail, "POST", options)



    //Vue.http.post('http://ip.jsontest.com/', [body], [options]).then(
    // Vue.http.get('http://ip.jsontest.com/').then(
    // 	function(response){ // on success
    // 		console.log("on callback success")
    // 		console.log(response)
    // 		var body = response.body
    // 		console.log("ip=" + body.ip)
    	
    // 	}, function(response){ // on fail
    // 		console.log("on callback FAILED")
    // 		console.log(response)

    // 	}

    // );


  }
  
}

module.exports = MyPlugin