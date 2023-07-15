//your JS code here. If required.
function x(){
	return new Promise((resolve, reject)=>
		{
		setTimeout(() =>{
			resolve("Hello, world!");
		},1000);
	})
}
let y = x();
y.then((data) =>{
	const op = document.getElementById("output");
	op.innerText = data;
	console.log(data);
});
