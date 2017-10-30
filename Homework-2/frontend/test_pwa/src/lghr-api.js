// created by Renato
var MyPlugin = {}

const apiURL = "http://api.teamlghr.site/twitter/api"


//const apiURL = "http://54.67.27.158:8081/twitter/api"
const getJSON = function(vueObject, endpoint, paramsObject, onSuccess, onFail, method, pluginOptions) {

	var url = apiURL

	const onResultSuccess = function(response){
		console.log("on callback success")
		console.log(response)
		var body = response.body
		//console.log("ip=" + body.params.ip)
		if (onSuccess) {
			onSuccess(body, vueObject)
		}
	}
	const onResultFail = function(response){
		console.log("on callback FAILED")
		console.log(response, vueObject)
		var body = response.body


		if (body.errorCode == 1) {  // errorCode == 1 is Invalid Token
			vueObject.$route.push("/Logout")
			return
		}

		if (onFail) {
			onFail(body)
		}
	}

	var headers = {"Content-Type":  "text/plain"} //using text/plain we avoid CORS issues (and sending the OPTIONS method before the POST)

	var options = {}
	options.headers = headers

	if (method && method.toLowerCase() == "get") {
		options.params = paramsObject
		vueObject.$http.get(url, options).then(onResultSuccess, onResultFail);
	} else {
		//console.table(paramsObject)
		var jsonBody = vueObject.$JSON.stringify(paramsObject);
		console.log(jsonBody);
		vueObject.$http.post(url, jsonBody , options).then(onResultSuccess, onResultFail);
	}

}





MyPlugin.install = function (Vue, options) {
  // 1. add global method or property
  Vue.prototype.lghrAPIRequest = function (vueObject, cmd, data, method, onSuccess, onFail) {
    // something logic ...
    console.log("hi grom lghr api")

    //console.table(options)
    //console.table(vueObject)

    if (data==undefined){ data = {} }

    const accessToken = vueObject.$session.get('token');
	const accessTokenSecret = vueObject.$session.get('tokenSecret');

	// JAME's
	// const accessToken = "904211533822955520-1bUicMh60bxTwu0NyOZHPHrNo5tRRDz"
	// const accessTokenSecret = "QKeebkymJpKXCIthgFNgy6LOKkbz3Y7mJsXE0bGQhWYuD"

	// // GENE's
	// const accessToken = "63268320-yF85DzYGmoI1xYjxDG5pyXVWX8Bf8ra6lyvewIw9I"
	// const accessTokenSecret = "P7c8HiuOSLDspUrsPEH46if2FycTt7kYmjtWu5J8td6a2"

	// // RENATO's
	// const accessToken =  "259456436-ySNtoAiAbZ5fiP4jpEaipGJisDhnWpVcnAX3WYVs"
	// const accessTokenSecret "tokenSecret=KtcYZjqjKYocYlqIq7H3g81mf5IVhAnWbGQQ92o1rs6eN"

    const params = { 'action': cmd,
				'data':data,
				'method':method,
				'credentials': {
					'accessToken': accessToken,
					'accessTokenSecret': accessTokenSecret
				}
			}


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