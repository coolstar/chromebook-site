function createAlert(modal, titleStr, messageStr){
	var modalBackground = document.createElement("div");
	modalBackground.classList.add("popover-modal-background");
	modalBackground.setAttribute("data-theme", "dark");
	modalBackground.style.opacity = "0";

	var popover = document.createElement("div");
	popover.classList.add("popover");
	popover.classList.add("alert");
	popover.classList.add("popover-hidden");
	popover.style.display = "none";

	var title = document.createElement("div");
		title.classList.add("title");

		var button = document.createElement("div");
		button.classList.add("button");
		button._popover = popover;
		button.onclick = function(){
			var popover = this._popover;
			popover.classList.add("popover-hidden");
			modalBackground.style.opacity = "0";
			setTimeout(function(){
				popover.remove();
				modalBackground.remove();
			}, 500);
		};
			var img = document.createElement("img");
			img.src="icons/arrow-back.svg";
			img.classList.add("glyph");
		button.appendChild(img);
		title.appendChild(button);

		var span = document.createElement("span");
		span.innerHTML = titleStr;
		title.appendChild(span);
	popover.appendChild(title);

	var body = document.createElement("div");
		body.classList.add("body");

		body.innerHTML = messageStr;
	popover.appendChild(body);

	document.getElementById("rootcontainer").appendChild(modalBackground);
	document.getElementById("rootcontainer").appendChild(popover);

	popover.style.display = "";
	setTimeout(function(){
		popover.classList.remove("popover-hidden");
		modalBackground.style.opacity = "0.75";
	}, 50);
}

$(document).ready(function(){
	$(".main-panel").click(function() {
		var displaying = this.classList.contains("main-panel-opened");

		var parent = this.parentElement;
		var childAnchors = parent.getElementsByClassName("dropdown-children");
		if (childAnchors.length == 0){
			return;
		}
		for (var j = 0; j < childAnchors.length; j++){
			var childAnchor = childAnchors[j];
			if (displaying)
				childAnchor.style.display = "none";
			else
				childAnchor.style.display = "";

			childAnchor.classList.remove("animate-height");
			childAnchor.style.height = "";

			if (!displaying){
				var realHeight = childAnchor.offsetHeight;
				childAnchor.style.height = "0px";
				setTimeout(function(){
					childAnchor.classList.add("animate-height");
					childAnchor.style.height = realHeight + "px";

					setTimeout(function(){
						childAnchor.classList.remove("animate-height");
						childAnchor.style.height = "";
					}, 500);
				}, 10);
			}
		}

		if (displaying)
			this.classList.remove("main-panel-opened");
		else
			this.classList.add("main-panel-opened");
	});

	$(".main-panel").keypress(function(e) {
		var key = e.which;
		if(key == 13)  // the enter key code
		{
			$(this).click();
			return false;
		}
	});

	$(".dropdown-children").css("display", "none");
});