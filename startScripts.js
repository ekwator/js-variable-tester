document.querySelectorAll('script').forEach(oldScript => {
    const newScript = document.createElement('script');
    if (oldScript.src) {
        newScript.src = oldScript.src; // для внешних скриптов
    } else {
        newScript.textContent = oldScript.textContent; // для встроенных
    }
    oldScript.replaceWith(newScript);
});

