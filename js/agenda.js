document.addEventListener("DOMContentLoaded", function () {
  const showList = document.getElementById("showList");

  const shows = [
    
  ];

  shows.forEach((show) => {
    const listItem = createShowListItem(show);
    showList.appendChild(listItem);
  });

  function addShow() {
    const bandInput = document.getElementById("band");
    const dateInput = document.getElementById("date");
    const venueInput = document.getElementById("venue");

    const newShow = {
      date: dateInput.value,
      band: bandInput.value,
      venue: venueInput.value,
    };

    const listItem = createShowListItem(newShow);
    showList.insertBefore(listItem, showList.firstChild);

    // Clear the form inputs after adding the show
    bandInput.value = "";
    dateInput.value = "";
    venueInput.value = "";
  }

  function createShowListItem(show) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <p class="show-date">Data: ${show.date}</p>
      <p class="show-band">Evento: ${show.band}</p>
      <p class="show-venue">Local: ${show.venue}</p>
    `;
    return listItem;
  }

  // Attach the addShow function to the button click event
  const addButton = document.querySelector("button");
  addButton.addEventListener("click", addShow);
});
