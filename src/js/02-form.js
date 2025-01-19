const form = document.querySelector(".feedback-form");
const FORM_DATA = "feedback-form-data";

function savedFormItem(event) {
    event.preventDefault();
    const formList = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    const transformedList = JSON.stringify(formList);
    localStorage.setItem(FORM_DATA, transformedList);
};

form.addEventListener("submit", savedFormItem);