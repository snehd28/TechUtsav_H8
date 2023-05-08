$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			
			// set variables for calculating each component score
			var collegeScore = "";
			var foodScore = "";
			var vegScore = "";
			var lightScore = "";
			var unplugScore = "";
			var dryScore = "";
            var recycleScore = "";
			

			var totalScore = "";

			if (document.getElementById("optionsRadio1").checked) {
				collegeScore = 10;
			}
			// console.log("Newspaper score is: " + newspaperScore);

            if (document.getElementById("optionsRadio2").checked) {
				collegeScore = 1115;
			}

            if (document.getElementById("optionsRadio3").checked) {
				collegeScore = 131;
			}

            if (document.getElementById("optionsRadio4").checked) {
				collegeScore = 459;
			} 

			if (document.getElementById("optionsRadio5").checked) {
				foodScore = 4818;
			} 
			// console.log("Aluminum and tin score is: " + alumTinScore);

            if (document.getElementById("optionsRadio6").checked) {
				foodScore = 629;
			} 
            if (document.getElementById("optionsRadio7").checked) {
				vegScore = 153;
			} 
            if (document.getElementById("optionsRadio8").checked) {
				vegScore = 644;
			} 
            if (document.getElementById("optionsRadio9").checked) {
				lightScore = 133;
			} 
            if (document.getElementById("optionsRadio10").checked) {
				lightScore = 268;
			} 
            if (document.getElementById("optionsRadio11").checked) {
				unplugScore = 9;
			} 
            if (document.getElementById("optionsRadio12").checked) {
				unplugScore = 18;
			} 

            if (document.getElementById("optionsRadio13").checked) {
				dryScore = 10;
			} 
            if (document.getElementById("optionsRadio14").checked) {
				dryScore = 750;
			} 
            if (document.getElementById("optionsRadio15").checked) {
				dryScore = 375;
			} 
            if (document.getElementById("optionsRadio16").checked) {
				recycleScore = -105;
			} 
            if (document.getElementById("optionsRadio17").checked) {
				recycleScore = -7;
			} 
            if (document.getElementById("optionsRadio18").checked) {
				recycleScore = -19;
			}
            if (document.getElementById("optionsRadio19").checked) {
				recycleScore = -86;
			} 

			
			// calculate scores for each category and round it off to the nearest integer
			var totalScore = Math.round(collegeScore+foodScore+vegScore+unplugScore+dryScore+lightScore+recycleScore);

			
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}

		// check selection made for recycling newspaper before calculating and displaying score
		var collegeSelection1 = document.getElementById("optionsRadio1").checked;
		var collegeSelection2 = document.getElementById("optionsRadio2").checked;
		var collegeSelection3 = document.getElementById("optionsRadio3").checked;
		var collegeSelection4 = document.getElementById("optionsRadio4").checked;
        var foodSelection1 = document.getElementById("optionsRadio5").checked;
		var foodSelection2 = document.getElementById("optionsRadio6").checked;
		var vegSelection1 = document.getElementById("optionsRadio7").checked;
		var vegSelection2 = document.getElementById("optionsRadio8").checked;
        var lightSelection1 = document.getElementById("optionsRadio9").checked;
		var lightSelection2 = document.getElementById("optionsRadio10").checked;
		var unplugSelection1 = document.getElementById("optionsRadio11").checked;
		var unplugSelection2 = document.getElementById("optionsRadio12").checked;
        var drySelection1 = document.getElementById("optionsRadio13").checked;
		var drySelection2 = document.getElementById("optionsRadio14").checked;
		var drySelection3 = document.getElementById("optionsRadio15").checked;
		var recycleSelection1 = document.getElementById("optionsRadio16").checked;
        var recycleSelection2 = document.getElementById("optionsRadio17").checked;
		var recycleSelection3 = document.getElementById("optionsRadio18").checked;
		var recycleSelection4 = document.getElementById("optionsRadio19").checked;
		

		if (collegeSelection1 == false && collegeSelection2 == false && collegeSelection3 ==false && collegeSelection4 ==false|| foodSelection1 == false && foodSelection2 == false || vegSelection1 == false && vegSelection2 == false|| lightSelection1==false && lightSelection2==false || unplugSelection1==false && unplugSelection2==false || drySelection1
            ==false && drySelection2==false && drySelection3==false || recycleSelection1==false && recycleSelection2==false && recycleSelection3==false && recycleSelection4==false) {
			if (collegeSelection1 == false && collegeSelection2 == false && collegeSelection3 == false && collegeSelection4 ==false) {
				$("#college-alert").show();
			} else {
				$("#college-alert").hide();
			}
            if (foodSelection1 == false && foodSelection2 == false) {
				$("#food-alert").show();
			} else {
				$("#food-alert").hide();
			}
            if (vegSelection1 == false && vegSelection2 == false) {
				$("#veg-alert").show();
			} else {
				$("#veg-alert").hide();
			}
            if (lightSelection1 == false && lightSelection2 == false) {
				$("#light-alert").show();
			} else {
				$("#light-alert").hide();
			}
            if (unplugSelection1 == false && unplugSelection2 == false) {
				$("#unplug-alert").show();
			} else {
				$("#unplug-alert").hide();
			}
            if (drySelection1 == false && drySelection2 == false && drySelection3 == false) {
				$("#dry-alert").show();
			} else {
				$("#dry-alert").hide();
			}

			if (recycleSelection1 == false && recycleSelection2 == false && recycleSelection3==false && recycleSelection4 == false) {
				$("#recycle-alert").show();
			} else {
				$("#recycle-alert").hide();
			}
		} else {
			calculateAndDisplayScore();
		}
	});	
});