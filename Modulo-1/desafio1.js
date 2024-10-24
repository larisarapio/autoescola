const name = 'Larissa';
const birthDate = '20/05/2000';

const validateAge = (userBirthDate) => {
    const today = new Date();
    const ageInMilliseconds = today.getTime() - userBirthDate.getTime();
    const ageInYears = millisecondsToYears(ageInMilliseconds);
    return Math.floor(ageInYears);
}

function validateBirthDate(userBirthDate) {
    if (userBirthDate.length !== 10) {
        return null;
    }
    
    const day = userBirthDate.slice(0, 2);
    const month = userBirthDate.slice(3, 5);
    const year = userBirthDate.slice(6);
    
    const validDate = (
        isValidDateElement(day, 31) &&
        isValidDateElement(month, 12) &&
        isValidDateElement(year)
    );

    if (!validDate) {
        return null;
    }

    return new Date(year, Number(month) - 1, day);
}

const greetingMessage = (userName, userBirthDate) => {
    if (typeof userName !== 'string' || typeof userBirthDate !== 'string') {
        console.warn("The name and birth date must be provided as strings");
        return null;
    }

    const birthDateObject = validateBirthDate(userBirthDate);

    if (!birthDateObject) {
        console.warn("The provided birth date is not valid");
        return null;
    }

    const age = validateAge(birthDateObject);
    const price = 1800;

    if (age < 16) {
        return `
            Hello ${userName}, we're happy to have you here. 
            You are ${age} years old, so the promotion does not apply.
        `;
    }

    if (age < 18) {
        return `
            Hello ${userName}, we're happy to have you here. 
            With early registration, you will only pay ${formatPrice(price * 0.8)} and
            can start your classes from ${getPermissionDate(birthDateObject)}.
        `;
    }

    if (age < 40) {
        return `
            Hello ${userName}, we're happy to have you here. 
            The amount to be paid is ${formatPrice(price)} and you can start
            your classes immediately.
        `;
    }

    return `
        Hello ${userName}, we're happy to have you here. 
        Enjoy our classes with the best experience!
    `;
}

function formatPrice(price) {
    return `R$${price.toFixed(2).replace(".", ",")}`;
}

function getPermissionDate(birthDate) {
    const permissionDate = new Date(birthDate);
    permissionDate.setFullYear(birthDate.getFullYear() + 18);
    permissionDate.setDate(birthDate.getDate() + 1);

    return permissionDate.toLocaleDateString('pt-BR');
}

function isValidDateElement(element, maxValue = Infinity) {
    const numericValue = Number(element);
    return !isNaN(numericValue) && numericValue > 0 && numericValue <= maxValue;
}

function millisecondsToYears(milliseconds) {
    return milliseconds / (1000 * 60 * 60 * 24 * 365);
}

console.log(greetingMessage(name, birthDate));
