// Empty JS for your own code to be here
var arr = ["We aim to become partners of choice bridging the gap between technology and business",
	"We live to leave a legacy by creating unique products that add value to our day to day lives",
	"Our Values are our Cornerstones We live by them and for them"];
function fade(i){
	setTimeout(function(s){
		s=s%3;
		document.querySelector('#header h1').innerHTML = arr[s];
		fade(s+1);
	},5000,i);
}
document.addEventListener("DOMContentLoaded", function(event) { 
  fade(0);
  document.querySelector('#header h1').style.animation = 'fade 5s infinite';
});