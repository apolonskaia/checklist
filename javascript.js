document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("table1");
    const numDays = 30;

    // table header
    var headerRow = document.createElement("tr");
    var learningTh = document.createElement("th");
    learningTh.classList.add("table-header");
    learningTh.textContent = "Learning";
    headerRow.appendChild(learningTh);
    
    for (let i = 1; i <= numDays; i++) {
        const day = document.createElement("th");
        day.textContent = i;
        headerRow.appendChild(day);
    }  
    table.appendChild(headerRow);   

    // table content
    var array = ["Stats", "Stepik", "Bioinf Book", "Cracking the CI", "Rosalind", "Coding"]
    array.forEach(function (item, index) {
        const tableRow = document.createElement("tr");
        const tableCell = document.createElement("td");
        tableCell.textContent = item;
        tableRow.appendChild(tableCell);
        
        for (let i = 1; i <= numDays; i++) {
            const tableTd = document.createElement("td");
            tableTd.setAttribute('data-id', item+i)
            tableTd.classList.add("circle");
            tableRow.appendChild(tableTd);
        }
        table.appendChild(tableRow);   
    });

    var table2 = document.getElementById("table2");
    headerRow = document.createElement("tr");
    learningTh = document.createElement("th");
    learningTh.classList.add("table-header");
    learningTh.textContent = "Health";
    headerRow.appendChild(learningTh);
    
    for (let i = 1; i <= numDays; i++) {
        const day = document.createElement("th");
        day.textContent = i;
        headerRow.appendChild(day);
    }  
    table2.appendChild(headerRow);   

    // table content
    array = ["Sport", "Vitamins", "Eye Workout", "Guasha", "5k/day", "Meditation"]
    array.forEach(function (item, index) {
        const tableRow = document.createElement("tr");
        const tableCell = document.createElement("td");
        tableCell.textContent = item;
        tableRow.appendChild(tableCell);
        
        for (let i = 1; i <= numDays; i++) {
            const tableTd = document.createElement("td");
            tableTd.setAttribute('data-id', item+i)
            tableTd.classList.add("circle");
            tableRow.appendChild(tableTd);
        }
        table2.appendChild(tableRow);   
    });

    var table3 = document.getElementById("table3");
    headerRow = document.createElement("tr");
    learningTh = document.createElement("th");
    learningTh.classList.add("table-header");
    learningTh.textContent = "Misc";
    headerRow.appendChild(learningTh);
    
    for (let i = 1; i <= numDays; i++) {
        const day = document.createElement("th");
        day.textContent = i;
        headerRow.appendChild(day);
    }  
    table3.appendChild(headerRow);   

    // table content
    array = ["Painting", "No shopping", "Reading Fiction"]
    array.forEach(function (item, index) {
        const tableRow = document.createElement("tr");
        const tableCell = document.createElement("td");
        tableCell.textContent = item;
        tableRow.appendChild(tableCell);
        
        for (let i = 1; i <= numDays; i++) {
            const tableTd = document.createElement("td");
            tableTd.setAttribute('data-id', item+i)
            tableTd.classList.add("circle");
            tableRow.appendChild(tableTd);
        }
        table3.appendChild(tableRow);   
    });

// Add click event listeners to circles
        const circles = document.querySelectorAll('.circle');

        circles.forEach(circle => {
            let originalColor = getComputedStyle(circle).backgroundColor;

            circle.addEventListener('click', () => {
                circle.classList.toggle('clicked');

                // Save the status in local storage
                const circleId = circle.getAttribute('data-id');
                const isClicked = circle.classList.contains('clicked');
                localStorage.setItem(circleId, isClicked.toString());

                circle.style.backgroundColor = isClicked ? '#9ab84f' : originalColor;
            });

            // Check local storage for previous status
            const circleId = circle.getAttribute('data-id');
            const isClicked = localStorage.getItem(circleId);
            if (isClicked === 'true') {
                circle.classList.add('clicked');
                circle.style.backgroundColor = '#9ab84f';
            }
        });

});