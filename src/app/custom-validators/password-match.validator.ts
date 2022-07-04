import { FormGroup } from "@angular/forms";

export function passwordMath(group: FormGroup){
  const pwControl = group.get('password')
  const pwConfirm = group.get('passwordConfirm')
  if(pwControl?.value === pwConfirm?.value) return null
  return {pwMatch: false}
}
