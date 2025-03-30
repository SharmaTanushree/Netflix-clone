export const ValidateForm = (email, password) =>{
   const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
   const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

   if(!isEmailValid) return "Email is not valid";
   if(!isPasswordValid) return "Password is not valid";
   return null;
}