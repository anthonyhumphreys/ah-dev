'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { FormEvent, useState } from 'react';

type Errors = Partial<Record<'name' | 'email' | 'subject', string>>;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const subject = String(formData.get('subject') ?? '');

    if (name.trim().length < 2) {
      nextErrors.name = 'Add your name so I know who is getting in touch.';
    }

    if (!/^\S+@\S+$/.test(email)) {
      nextErrors.email = 'Use a valid email address so I can reply.';
    }

    if (subject.trim().length === 0) {
      nextErrors.subject = 'Add a short subject for the message.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      toast.success('Message drafted', {
        description: 'Email Anthony directly if this form is not wired up yet.',
      });
    }
  };

  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-3xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <div className="text-center md:text-left">
        <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
          Get in touch
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Useful conversations welcome: software, platforms, AI systems, research tools, and roles
          where senior engineering judgement is the point rather than the garnish.
        </p>
      </div>

      <form className="mt-10" onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="grid gap-5 md:grid-cols-2">
            <Field data-invalid={Boolean(errors.name)}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your name…"
                aria-invalid={Boolean(errors.name)}
              />
              <FieldError>{errors.name}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.email)}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="you@example.com…"
                aria-invalid={Boolean(errors.email)}
              />
              <FieldError>{errors.email}</FieldError>
            </Field>
          </div>

          <Field data-invalid={Boolean(errors.subject)}>
            <FieldLabel htmlFor="subject">Subject</FieldLabel>
            <Input
              id="subject"
              name="subject"
              autoComplete="off"
              placeholder="Project, role, or idea…"
              aria-invalid={Boolean(errors.subject)}
            />
            <FieldError>{errors.subject}</FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
              id="message"
              name="message"
              autoComplete="off"
              placeholder="A little context…"
              className="min-h-36"
            />
            <FieldDescription>Keep it practical. Specific context beats mystery.</FieldDescription>
          </Field>

          <Button type="submit" size="lg" className="w-full md:w-fit">
            Send Message
          </Button>
        </FieldGroup>
      </form>
    </main>
  );
}
