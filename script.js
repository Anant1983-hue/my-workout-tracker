
const checkboxes = document.querySelectorAll(".exercise");

function updateProgress() {

    let completed = 0;

    checkboxes.forEach(function(box) {
        if (box.checked) {
            completed++;
        }
    });

    let total = checkboxes.length;

    let percentage = (completed / total) * 100;

    document.getElementById("progress").innerText =
        percentage + "% completed";

    document.getElementById("count").innerText =
        completed + " / " + total;
}

checkboxes.forEach(function(box) {
    box.addEventListener("change", updateProgress);
});

updateProgress();
