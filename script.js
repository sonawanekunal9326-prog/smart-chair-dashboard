console.log("Smart Chair Dashboard Started");
console.log("Smart Chair Dashboard Started");

function testNotification() {

    if ("Notification" in window) {

        if (Notification.permission === "granted") {

            new Notification("Smart Chair Alert", {
                body: "⚠️ Chair is away and nobody is sitting!",
            });

        } else if (Notification.permission !== "denied") {

            Notification.requestPermission().then(permission => {

                if (permission === "granted") {

                    new Notification("Smart Chair Alert", {
                        body: "⚠️ Chair is away and nobody is sitting!",
                    });

                }

            });

        } else {
            alert("Browser notification permission is blocked.");
        }

    } else {

        alert("This browser does not support notifications.");

    }
}