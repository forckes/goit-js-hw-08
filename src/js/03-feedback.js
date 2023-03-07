import "../css/common.css";
import "../css/03-feedback.css";
import throttle from "lodash.throttle";

//refs
const refs = {
	form: document.querySelector("form"),
	input: document.querySelector("input"),
	textarea: document.querySelector("textarea"),
	btn: document.querySelector("button")
};
const data = {
	email: refs.input,
	message: refs.textarea
};
const FORM_DATA = "feedback-form-state";

const throttleFormInput = throttle(onFormInput, 500);

//listeners
refs.form.addEventListener("input", throttleFormInput);
refs.form.addEventListener("submit", onSubmitClick);

onPopulateTextarea();
//functions
function onFormInput() {
	data.email = refs.input.value;
	data.message = refs.textarea.value;
	localStorage.setItem(FORM_DATA, JSON.stringify(data));
}

function onSubmitClick(e) {
	e.preventDefault();
	localStorage.removeItem(FORM_DATA);
	e.currentTarget.reset();
}
function onPopulateTextarea() {
	const savedMessage = localStorage.getItem(FORM_DATA);
	if (savedMessage) {
		const parsedForm = JSON.parse(savedMessage);
		refs.input.value = parsedForm.email;
		refs.textarea.value = parsedForm.message;
	}
}
