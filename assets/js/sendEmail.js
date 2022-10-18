function sendMail(contactForm) {
    emailjs.send("service_dkbm4ko","template_qx7ha8g",{
        to_name: "Kike",
        from_name: "name.value",
        message: "projectsummary.value",
        from_email: "contactForm.emailaddress.value"
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error)
            });

        return false;
}