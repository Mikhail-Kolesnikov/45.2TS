// import styles from './Lesson16.module.css'

import ChildrenProps from "../../components/childrenProps/ChildrenProps";

export default function Lesson16():JSX.Element {
  return (
    <div>
      <h2>Lesson16: react practice</h2>
      <ChildrenProps text="переданный текст через обычный синтаксис props"/>
      <ul>

        <li>данные из lesson 16</li>
        <li>переданные </li>
      </ul>
    </div>
  )
}