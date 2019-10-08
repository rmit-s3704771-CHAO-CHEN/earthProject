(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const exec = require('child_process').exec;


function pushToShell(year, month, day) {
	
	var query = "sh getSpecificDayData.sh "+year+" "+month+" "+day;
	window.alert(query);

	const shellScript = exec(query);
	shellScript.stdout.on('data', (data)=>{
		console.log(data);
	});
	shellScript.stderr.on('data', (data)=>{
		console.error(data);
	})
	
	
}




},{"child_process":2}],2:[function(require,module,exports){

},{}]},{},[1]);

