document.addEventListener("DOMContentLoaded", function() {

    const sendButton = document.getElementById("myButton");

    // Den Event Listener für den Klick hinzufügen
    sendButton.addEventListener("click", function() {
        // 1. Daten aus den Input-Feldern sammeln
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const category = document.getElementById("category").value;
        const priority = document.getElementById("priority").value;
        const status = document.getElementById("status").value;
        const deadline = document.getElementById("calendar").value

        // 2. JavaScript-Objekt mit den gesammelten Daten erstellen
        const taskData = {
            // id is set in the backend
            title: title,
            description: description,
            category: category,
            priority: priority,
            status: status,
            deadline: deadline
            // createdAt und dueDate sind im Backend oft gesetzt.
        };

        const jsonData = JSON.stringify(taskData);

        console.log("Sende folgende Daten:", jsonData);

        fetch('http://localhost:8080/api/tasks/addTask', {
            method: 'POST', // HTTP-Method is POST
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Task erfolgreich erstellt:', data);
                alert('Task erfolgreich erstellt! Details in der Konsole.');
            })
            .catch(error => {
                console.error('Fehler beim Erstellen der Task:', error);
                alert('Fehler beim Erstellen der Task! Details in der Konsole.');
            });
    });
});