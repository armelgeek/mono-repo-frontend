import React, { ComponentProps } from 'react';



import { FieldValues, useController, UseControllerProps } from 'react-hook-form';



import { FormControl, FormItem, FormLabel } from '@/shared/components/atoms/ui/form';
import { Textarea } from '@/shared/components/atoms/ui/textarea';





type ControlledTextareaInputProps<T extends FieldValues> = UseControllerProps<T> & {
  label?: string;
  placeholder?: string;
} & ComponentProps<typeof Textarea>

export function ControlledTextareaInput<T extends FieldValues>({  name,label, placeholder, control, defaultValue }: ControlledTextareaInputProps<T>) {
  const { field, fieldState } = useController<T>({
    control,
    name,
    defaultValue,
  });

  return (
      <FormItem className="flex flex-col gap-1">
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <Textarea
            {...field}
            className={fieldState.error?.message && 'border-destructive'}
            placeholder={placeholder ?? ''}
            value={field.value || ''}
          />
        </FormControl>
        {fieldState.error?.message && (
          <p className="text-xs my-1 text-red-500">{fieldState.error?.message}</p>
        )}
      </FormItem>
  );
}
