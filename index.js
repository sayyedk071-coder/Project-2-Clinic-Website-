 const revealItems = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.16 });

        revealItems.forEach((item, index) => {
            item.style.transitionDelay = `ms`;
            observer.observe(item);
        });

        document.querySelector("form").addEventListener("submit", (event) => {
            event.preventDefault();
            const button = event.currentTarget.querySelector("button");
            button.textContent = "Request Sent";
            button.style.background = "#d96c4b";
        });