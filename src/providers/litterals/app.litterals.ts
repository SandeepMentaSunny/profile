interface AppLitterals {
    required: string;
    username: string;
    emailId: string;
    emailIdValidator: string;
    usernameValidator: string;
}

export const AppLitteralsConfig: AppLitterals = {
    required: 'This field is required',
    username: 'Accepts only Alphabets and Spaces',
    emailId: 'Please enter a valid Email Id',
    emailIdValidator: "Please provide another Email Id",
    usernameValidator: "Please provider another Username",
}