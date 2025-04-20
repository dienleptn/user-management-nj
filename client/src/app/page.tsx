import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "antd";

export default function Home() {
  return (
    <div>
      Hello world!
      <Button type="primary">Click here</Button>
    </div>
  );
}
