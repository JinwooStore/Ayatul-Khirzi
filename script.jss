document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", function() {
    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background-color: #1a1a1a;
            color: #fff;
        }
        .dark-mode header {
            background-color: #333;
        }
        .dark-mode .verse {
            background: #222;
            color: #fff;
        }
        .dark-mode h2 {
            color: #00e676;
        }
    `;
    document.head.appendChild(darkModeStyle);
});
