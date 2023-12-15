

let menubar = document.querySelector(".menu-btn");
        let navlink = document.querySelector(".navlinks");
        let toggleOut = document.querySelector(".toggle");
        let toggleIn = document.querySelector(".toggle-btn");
        let qutBar = document.querySelectorAll(".quarterly");
        let yearBar = document.querySelectorAll(".yearly");

        function toggleMenu()
            {
                menubar.classList.toggle('active');
                navlink.classList.toggle('active');
            }
        function toggle(){
                toggleOut.classList.toggle('active');
                toggleIn.classList.toggle('active');
                qutBar.forEach(qutBars => {
                qutBars.classList.toggle('active');
                });
                yearBar.forEach(yearBars => {
                yearBars.classList.toggle('active');
                });
            }