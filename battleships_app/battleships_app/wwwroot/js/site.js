// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'f' || e.key === 'F') {
        toggleFullScreen();
    }
});

// The 'Esc' key functionality to exit fullscreen is built into browsers by default, so you don't need to add extra code for it.

$(document).ready(function() {
    var audioElement = document.getElementById("myAudio");
    $(".bg-primary").click(function() {
        $(this).fadeOut("medium");
    });
    
    
    $(".bg-primary[data-custominfo='True']").click(function () {
        // Play the sound
        audioElement.play();

        // Show the overlay
        $("#overlay").fadeIn("medium");

        setTimeout(function () {
            // Hide the overlay
            $("#overlay").fadeOut();

            // Optionally: Stop the sound after 5 seconds
            audioElement.pause();
            audioElement.currentTime = 0;  // Reset the sound to start
        }, 5000);  // 5000ms = 5 seconds
    });
    
});

$(document).ready(function() {
    // When a button with the class 'x-button' is clicked
    $('.x-button').click(function() {
        // Traverse up to the parent's parent and hide (collapse) it
        $(this).closest('.team-container').hide(); // or use `.fadeOut()` for a fade effect
    });
});
