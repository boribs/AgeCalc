function calculateAge(form) {
    const age = form.age.value;
    if (!age) return;
    document.getElementById("c").style.visibility = "visible";
    setTimeout(() => {
        window.alert(`Your age is ${age}!`);
        document.getElementById("c").style.visibility = "hidden";
    }, Math.floor(Math.random() * 1000) + 1800);
}
