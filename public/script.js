document.addEventListener("DOMContentLoaded", function() {
    function loadSection() {
        // Hide all sections
        document.querySelectorAll('main > section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the section based on the hash
        const hash = window.location.hash.substring(1);
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                section.style.display = 'block';
            }
        } else {
            // Default to showing the welcome section if no hash is present
            document.getElementById('welcome').style.display = 'block';
        }
    }

    // Load the correct section on initial page load
    loadSection();

    // Load the correct section when the hash changes
    window.addEventListener('hashchange', loadSection);
});

