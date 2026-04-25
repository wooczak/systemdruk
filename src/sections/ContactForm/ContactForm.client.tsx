import { z, ZodError } from "astro/zod";
import { createEffect, createSignal } from "solid-js";

const FormSchema = z.object({
  name: z.string(),
  email: z.email("Email is invalid."),
  message: z.string(),
});

type FormState = z.infer<typeof FormSchema>;
type ErrorSchema = Record<keyof FormState, string>;

function validateForm(state: FormState): ErrorSchema | undefined {
  try {
    FormSchema.parse(state);
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: ErrorSchema = {} as ErrorSchema;

      error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormState;
        fieldErrors[fieldName] = issue.message;
      });

      return fieldErrors;
    }
  }
}

export function ContactFormClientComponent() {
  const [formState, setFormState] = createSignal<z.infer<typeof FormSchema>>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = createSignal<ErrorSchema>();

  createEffect(() => {
    setErrors(validateForm(formState()));
  });

  return (
    <form>
      <div class="contact-form__field">
        <label for="name">
          Imię i nazwisko <span class="contact-form__field-asterisk">*</span>
        </label>
        <input
          type="text"
          id="name"
          class={`contact-form__input ${errors()?.name ? "contact-form__input--error" : ""}`}
          value={formState().name}
          onInput={(e) =>
            setFormState({ ...formState(), name: e.currentTarget.value })
          }
        />
        {formState().name.length > 0 && errors()?.name && (
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
          class={`contact-form__input ${errors()?.email ? "contact-form__input--error" : ""}`}
          value={formState().email}
          onInput={(e) =>
            setFormState({ ...formState(), email: e.currentTarget.value })
          }
        />
        {formState().email.length > 0 && errors()?.email && (
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
          class={`contact-form__input ${errors()?.message ? "contact-form__input--error" : ""}`}
          value={formState().message}
          onInput={(e) =>
            setFormState({ ...formState(), message: e.currentTarget.value })
          }
        />
        {formState().message.length > 0 && errors()?.message && (
          <span class="contact-form__error">{errors()?.message}</span>
        )}
      </div>
    </form>
  );
}
