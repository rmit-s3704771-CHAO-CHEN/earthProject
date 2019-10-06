function pushToShell(year, month, day) {
	const exec = require('child_process').exec;
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

