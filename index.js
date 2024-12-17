(function () {
    emailjs.init({
        publicKey: "irWkxCrOW9-WWhfvP",
    });
})();

window.onload = function () {
    document.getElementById("forms").addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("service_3fa0cjs", "template_9jldnaq", this).then(
            function(){
                alert("Sent Successfully!")
                document.getElementById("forms").reset();
            }, 
            (error) => {
                console.log('FAILED...', error);
            }
        );
    });
};