import { validateEmail, validatePassword } from "./validation";

// Email Validation
describe('Email validation', () => {
    it('Should accept valid emails', () => {
        const validatedEmail = validateEmail("name@email.com");
        expect(validatedEmail).toBeUndefined();
    });

    it('Should not accept invalid emails', () => {
        const validatedEmail = validateEmail("name@email");
        expect(validatedEmail).toEqual("This email address is not valid");
    });

    it('Should not accept empty strings', () => {
        const validatedEmail = validateEmail("");
        expect(validatedEmail).toEqual("Please enter your email");
    });
});

// Password Validation
describe('Password validation', () => {
    it('Should not accept empty strings', () => {
        const validatedPassword = validatePassword("");
        expect(validatedPassword).toEqual("Please enter your password");
    });
});