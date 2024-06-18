function populateCalendar() {
    const daysContainer = document.querySelector('.days');
    const daysInMonth = 31; 
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        daysContainer.appendChild(dayElement);
    }
}


function populateUpcomingEvents() {
    const upcomingEventsList = document.getElementById('upcoming-events');
    const upcomingEventsData = [
        "March 27 - Checking RC Car ",
        "April 1 - Technopreneusip ",
    ];
    upcomingEventsData.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.textContent = event;
        upcomingEventsList.appendChild(eventItem);
    });
}


function populatePastEvents() {
    const pastEventsList = document.getElementById('past-events');
    // Sample past events data (replace with actual data)
    const pastEventsData = [
        "March 12 -  Proposal Defense",
    ];
    pastEventsData.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.textContent = event;
        pastEventsList.appendChild(eventItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contactModal");
    var openBtn = document.getElementById("openModalBtn");
    var closeBtn = document.getElementsByClassName("close")[0];

    openBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // You can add your form submission logic here
        // For demonstration, let's just close the modal after submission
        modal.style.display = "none";
    });
});

populateCalendar();
populateUpcomingEvents();
populatePastEvents();

function openPopup(imageSrc) {
    var popup = document.getElementById("popup-container");
    var popupImg = document.getElementById("popup-img");
    popup.style.display = "block";
    popupImg.src = imageSrc;
}

function closePopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "none";
}


