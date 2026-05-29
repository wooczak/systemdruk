import { z, ZodError } from "astro/zod";
import { createSignal } from "solid-js";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Email is invalid."),
  message: z.string().min(1, "Message is required."),
});

type FormState = z.infer<typeof FormSchema>;
type ErrorSchema = Partial<Record<keyof FormState, string>>;
type TouchedFields = Record<keyof FormState, boolean>;

function validateForm(state: FormState): ErrorSchema {
  try {
    FormSchema.parse(state);
    return {};
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: ErrorSchema = {};

      error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormState;
        fieldErrors[fieldName] = issue.message;
      });

      return fieldErrors;
    }
    return {};
  }
}

export function ContactFormClientComponent() {
  const [formState, setFormState] = createSignal<z.infer<typeof FormSchema>>({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = createSignal<TouchedFields>({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = createSignal<ErrorSchema>({});

  const handleBlur = (field: keyof FormState) => {
    setTouched({ ...touched(), [field]: true });
    setErrors(validateForm(formState()));
  };

  const handleInput = (field: keyof FormState, value: string) => {
    setFormState({ ...formState(), [field]: value });
    if (touched()[field]) {
      setErrors(validateForm(formState()));
    }
  };

  return (
    <form>
      <div class="contact-form__field">
        <label for="name">
          Imię i nazwisko <span class="contact-form__field-asterisk">*</span>
        </label>
        <input
          type="text"
          id="name"
          class={`contact-form__input ${touched().name && errors()?.name ? "contact-form__input--error" : ""}`}
          value={formState().name}
          onInput={(e) => handleInput("name", e.currentTarget.value)}
          onBlur={() => handleBlur("name")}
        />
        {touched().name && errors()?.name && (
          <span class="contact-form__error">{errors()?.name}</span>
        )}
      </div>
      <div class="contact-form__field">
        <label for="email">
          E-mail służbowy <span class="contact-form__field-asterisk">*</span>
        </label>
        <input
          type="email"
          id="email"
          class={`contact-form__input ${touched().email && errors()?.email ? "contact-form__input--error" : ""}`}
          value={formState().email}
          onInput={(e) => handleInput("email", e.currentTarget.value)}
          onBlur={() => handleBlur("email")}
        />
        {touched().email && errors()?.email && (
          <span class="contact-form__error">{errors()?.email}</span>
        )}
      </div>
      <div class="contact-form__field">
        <label for="message">
          Kilka słów o projekcie{" "}
          <span class="contact-form__field-asterisk">*</span>
        </label>
        <textarea
          id="message"
          class={`contact-form__input ${touched().message && errors()?.message ? "contact-form__input--error" : ""}`}
          value={formState().message}
          onInput={(e) => handleInput("message", e.currentTarget.value)}
          onBlur={() => handleBlur("message")}
        />
        {touched().message && errors()?.message && (
          <span class="contact-form__error">{errors()?.message}</span>
        )}
      </div>
    </form>
  );
}
