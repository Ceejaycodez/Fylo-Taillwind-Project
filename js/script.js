const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// * Check for light or dark mode and display button to change mode
if (
	localStorage.getItem('color-theme') === 'dark' ||
	(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	// * Show Light Icon Because Currently in Dark Mode
	themeToggleLightIcon.classList.remove('hidden');
} else {
	// * Show Dark Icon Because Currently in Light Mode
	themeToggleDarkIcon.classList.remove('hidden');
}

// * Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
	// * Toggle Icon
	themeToggleDarkIcon.classList.toggle('hidden');
	themeToggleLightIcon.classList.toggle('hidden');

	// * If Color-theme is set in local storage
	if (localStorage.getItem('color-theme')) {
		// * if in light mode, switch to dark and save in local storage
		if (localStorage.getItem('color-theme') === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}
	} else {
		// * If not in local storage
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		}
	}
}
