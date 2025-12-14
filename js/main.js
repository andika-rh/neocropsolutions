$(function () {

	const $popup = $("#regionPopup");

	if (!$popup.length) return;

	$("#openRegionPopup").on("click", () => {
		$popup.addClass("show");
	});

	$("#closeRegionPopup").on("click", () => {
		$popup.removeClass("show");
	});

});

//job detail

function showDetail(title, location, type, exp, openings, overview, responsibilities) {
			document.getElementById("detailTitle").innerText = title;
			document.getElementById("detailLocation").innerText = location;
			document.getElementById("detailType").innerText = type;
			document.getElementById("detailExperience").innerText = exp;
			document.getElementById("detailOpenings").innerText = openings;
			document.getElementById("detailOverview").innerText = overview;

			// Update responsibilities list
			let ul = document.getElementById("detailResponsibilities");
			ul.innerHTML = "";
			responsibilities.forEach(r => {
				let li = document.createElement("li");
				li.innerText = r;
				ul.appendChild(li);
			});
		}

document.querySelectorAll(".job-card").forEach(card => {
			card.addEventListener("click", function () {
				document.querySelectorAll(".job-card").forEach(c => c.classList.remove("active"));
				this.classList.add("active");
			});
		});

//modal job

function openModal() {
	document.getElementById("jobModal").style.display = "flex";
}

function closeModal() {
	document.getElementById("jobModal").style.display = "none";
}

//sticky header
document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.getElementById("main-header");
  const topHeader = document.getElementById("top-header");

  const triggerHeight = topHeader.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > triggerHeight) {
      mainHeader.classList.add("fixed");
    } else {
      mainHeader.classList.remove("fixed");
    }
  });
});

