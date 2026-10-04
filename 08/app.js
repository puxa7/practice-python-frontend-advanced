console.log("DOM");

const form = document.querySelector("form");
const messages = document.querySelector(".messages");

const fields = [
    { name: "firstName", label: "Imię", required: true },
    { name: "lastName", label: "Nazwisko", required: true },
    { name: "street", label: "Ulica", required: true },
    {
        name: "houseNumber",
        label: "Numer budynku",
        type: "number",
        required: true,
    },
    { name: "flatNumber", label: "Numer mieszkania", type: "number" },
    {
        name: "zip",
        label: "Kod pocztowy",
        pattern: "^[0-9]{2}-[0-9]{3}$",
        required: true,
    },
    { name: "city", label: "Miasto", required: true },
    { name: "voivodeship", label: "Województwo", required: true }
];


if (form) {

    form.setAttribute("novalidate", "");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        messages.innerHTML = "";
        const errors = [];

        fields.forEach(function (field) {
            const value = form.elements[field.name].value.trim();

            if (field.required) {
                if (value.length === 0) {
                    errors.push(`Dane w polu ${field.label} są wymagane.`);
                }
            }

            if (field.type === "number") {
                if (Number.isNaN(Number(value))) {
                    errors.push(`Dane w polu ${field.label} muszą być liczbą.`);
                }
            }

            if (field.pattern) {
                const reg = new RegExp(field.pattern);
                if (!reg.test(value)) {
                    errors.push(`Dane w polu ${field.label} nie są zgodne ze wzorem.`);
                }
            }

        });


        if (errors.length > 0) {
            errors.forEach((error) => {
                const li = document.createElement("li");
                li.innerText = error;
                messages.appendChild(li);
            });
        } else {
            const li = document.createElement("li");
            li.innerText = "Dane zostały wysłane prawidłowo.";
            messages.appendChild(li);
            form.reset();
        }

    });

}

