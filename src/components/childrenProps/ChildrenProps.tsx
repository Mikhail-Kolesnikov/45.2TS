// import styles from './ChildrenProps.module.css'

interface IChildrenPropsProps {
  text?: string;
  children: React.ReactNode;
}

export default function ChildrenProps({ text = 'text by default' }: IChildrenPropsProps): JSX.Element {
  return (
    <div>
      <h2>ChildrenProps Example </h2>
      <p>{text}</p>
    </div>
  )
}