import styles from "./DefaultInput.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
