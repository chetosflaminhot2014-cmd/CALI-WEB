// ================================
// CALI ROLEPLAY
// SCRIPT PRINCIPAL
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "Cali Roleplay Web cargada correctamente."
    );

});


// ================================
// COPIAR IP
// ================================

const copyButton =
    document.getElementById("copyIP");

const serverIP =
    document.getElementById("serverIP");


if (copyButton && serverIP) {

    copyButton.addEventListener(
        "click",
        async () => {

            const ip =
                serverIP.textContent.trim();

            try {

                await navigator.clipboard.writeText(ip);

                copyButton.textContent =
                    "¡COPIADA!";

                setTimeout(() => {

                    copyButton.textContent =
                        "COPIAR IP";

                }, 2000);

            } catch (error) {

                alert(
                    "No se pudo copiar la IP."
                );

            }

        }
    );

}


// ================================
// BOTONES DE TIENDA
// ================================

const buttons =
    document.querySelectorAll(
        ".price-card button"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const card =
                button.closest(".price-card");

            const product =
                card
                    .querySelector("h3")
                    .textContent;

            alert(
                `Has seleccionado: ${product}\n\n` +
                `La tienda de Cali Roleplay estará disponible próximamente.`
            );

        }
    );

});