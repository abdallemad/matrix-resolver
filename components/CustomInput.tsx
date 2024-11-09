import { Control } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
type Props = {
  controller : Control<any>,
  name:string,
}
function CustomInput({
  controller,
  name,
}:Props) {
  return (
    <FormField
  control={controller}
  name={name}
  render={({ field }) => (
    <FormItem className="flex gap-2 items-center">
      <FormControl>
        <Input type="number" {...field} className="max-w-[4rem] text-lg"/>
      </FormControl>
      <FormLabel>{name}</FormLabel>
    </FormItem>
  )}
/>
  )
}

export default CustomInput
